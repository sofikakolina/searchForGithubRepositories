import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { addRepository, deleteRepositories } from '@/store/features/repositorySlice'
import { Repository } from '@/store/features/repositorySlice'
import { addTotal } from '@/store/features/pagination'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const dispatch = useAppDispatch()
  const page = useAppSelector(state => state.pagination.page)
  const size = useAppSelector(state => state.pagination.size)
  const handleSearchRepo = async() =>{
    try{
      const response  = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: search,
          sort: 'stars',  // Можно использовать другие значения: forks, updated
          order: 'desc',  // Порядок сортировки: asc или desc
          per_page: size,   // Количество репозиториев на страницу
          page: page         // Номер страницы
        }
      })      
      
      const repositories = response.data.items;
      console.log(repositories)
      dispatch(deleteRepositories())

      repositories.map((repository: { id:number, name: string; language: string; forks_count: number; stargazers_count: number; updated_at: string | number | Date, topics: Array<string>, license: any }) => handleAddRepository({
          id: repository.id,
          name: repository.name,
          language: repository.language,
          numberOfForks: repository.forks_count,
          numberOfStars: repository.stargazers_count,
          dateOfUpdate: new Date(repository.updated_at).toLocaleDateString("en-GB"),
          topics: repository.topics,
          license: repository.license?.name,
      }));

      dispatch(addTotal({ total: response.data.total_count}))

    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    if (search) handleSearchRepo()
  }, [page, size])

  const handleAddRepository = (repository: Repository) =>{
    dispatch(addRepository({ id: repository.id, name:repository.name, language:repository.language, numberOfForks:repository.numberOfForks, numberOfStars:repository.numberOfStars, dateOfUpdate:repository.dateOfUpdate, topics: repository.topics, license: repository.license}))
  }

  return (
    <div className={styles.navbar}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Введите поисковый запрос'/>
      <button onClick={handleSearchRepo}>
        Искать
      </button>
    </div>
  )
}

export default Navbar