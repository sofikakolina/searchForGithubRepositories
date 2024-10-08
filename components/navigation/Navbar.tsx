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

  //функция для api запроса к github
  const handleSearchRepo = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    try{
      const response  = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: search,
          sort: 'stars',
          order: 'desc',  // Порядок сортировки: asc или desc
          per_page: size,  // Количество репозиториев на страницу
          page: page // Номер страницы
        }
      })      
      const repositories = response.data.items;
      dispatch(deleteRepositories())
      repositories.map((repository: { id:number, name: string; language: string; forks_count: number; stargazers_count: number; updated_at: string | number | Date, topics: Array<string>, license: any }) => handleAddRepository({
          id: repository.id,
          name: repository.name,
          language: repository.language,
          numberOfForks: repository.forks_count,
          numberOfStars: repository.stargazers_count,
          dateOfUpdate: new Date(repository.updated_at).toLocaleDateString("ru-RU"),
          topics: repository.topics,
          license: repository.license?.name,
      }));
      dispatch(addTotal({ total: response.data.total_count}))
    } catch(error){
      console.log(error)
    }
  }

  //функция для повторени api запроса в случае изменения page или size
  useEffect(() => {
    if (search) handleSearchRepo()
  }, [page, size])

  //функция для добавлени репозитория в redux хранилище 
  const handleAddRepository = (repository: Repository) =>{
    dispatch(addRepository({ id: repository.id, name:repository.name, language:repository.language, numberOfForks:repository.numberOfForks, numberOfStars:repository.numberOfStars, dateOfUpdate:repository.dateOfUpdate, topics: repository.topics, license: repository.license}))
  }

  return (
    <form onSubmit={handleSearchRepo} className={styles.navbar}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Введите поисковый запрос'/>
      <button disabled={!search} type="submit">
        Искать
      </button>
    </form>
  )
}

export default Navbar