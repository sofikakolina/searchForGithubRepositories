'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'
import { useAppDispatch } from '@/store/store'
import { addRepository } from '@/store/features/repositorySlice'
import { Repository } from '@/store/features/repositorySlice'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const dispatch = useAppDispatch()

  const handleSearchRepo = async() =>{
    try{
      const response  = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: search || 'tor',
          sort: 'stars',  // Можно использовать другие значения: forks, updated
          order: 'desc',  // Порядок сортировки: asc или desc
          per_page: 10,   // Количество репозиториев на страницу
          page: 1         // Номер страницы
        }
      })      
      
      const repositories = response.data.items;

      repositories.map((repository: { id:number, name: any; language: any; forks_count: any; stargazers_count: any; updated_at: string | number | Date }) => handleAddRepository({
          id: repository.id,
          name: repository.name,
          language: repository.language,
          numberOfForks: repository.forks_count,
          numberOfStars: repository.stargazers_count,
          dateOfUpdate: new Date(repository.updated_at).toLocaleDateString("en-GB"),
      }));

    } catch(error){
      console.log(error)
    }
  }

  const handleAddRepository = (repository: Repository) =>{
    // e.preventDefault()
    dispatch(addRepository({ id: repository.id, name:repository.name, language:repository.language, numberOfForks:repository.numberOfForks, numberOfStars:repository.numberOfStars, dateOfUpdate:repository.dateOfUpdate}))
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