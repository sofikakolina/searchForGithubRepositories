'use client'
import { useAppSelector } from '@/store/store'
import styles from "./styles.module.scss"
import { addDetail } from '@/store/features/details'
import { useAppDispatch } from '@/store/store'
import { Repository, sortRepositories } from '@/store/features/repositorySlice'
import Pagination from './Pagination'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useState } from 'react'

const Table = () => {
  const repositories = useAppSelector(state => state.repository.repositories)
  const dispatch = useAppDispatch()
  const [push, setPush] = useState(true)
  const [pushForks, setPushForks] = useState(true)
  const [pushStars, setPushStars] = useState(true)
  const [pushDate, setPushDate] = useState(true)

  //функция для добавления деталей о репозитории при нажатии на него в redux 
  const handleAddDetails = (repository: Repository) => {
    dispatch(addDetail({
      id: repository.id,
      name: repository.name,
      language: repository.language,
      numberOfForks: repository.numberOfForks,
      numberOfStars: repository.numberOfStars,
      dateOfUpdate: repository.dateOfUpdate,
      topics: repository.topics,
      license: repository.license
    }))
  }

  //функция для обращения к сортировке в хранилище redux, передает нужную колонку для сортировки, а также направление сортировки
  const handlePush = (push:boolean, setPush:any, column: keyof Repository) =>{
    setPush((prev: any) => !prev)
    dispatch(sortRepositories({ sortDown: push, column }));
  }

  if (repositories.length === 0) {
    return <p>По данным параметрам у нас нет для Вас репозиторий</p>
  }

  return (
    <div className='flex flex-col justify-between h-full gap-10'>
      <div className={styles.mainTable}>
        <h1>Результаты поиска</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableLine}>
              <th className={styles.cellHead}><button onClick={() => handlePush(push, setPush, "name")}>{push ? <FaArrowUp color='#737272'/> : <FaArrowDown color='#737272'/>}Название</button></th>
              <th className={styles.cellHead}>Язык</th>
              <th className={styles.cellHead}><button onClick={() => handlePush(pushForks, setPushForks, "numberOfForks")}>{pushForks ? <FaArrowUp color='#737272'/> : <FaArrowDown color='#737272'/>}Число форков</button></th>
              <th className={styles.cellHead}><button onClick={() => handlePush(pushStars, setPushStars, "numberOfStars")}>{pushStars ? <FaArrowUp color='#737272'/> : <FaArrowDown color='#737272'/>}Число звезд</button></th>
              <th className={styles.cellHead}><button onClick={() => handlePush(pushDate, setPushDate, "dateOfUpdate")}>{pushDate ? <FaArrowUp color='#737272'/> : <FaArrowDown color='#737272'/>}Дата обновления</button></th>
            </tr>
          </thead>
          <tbody>
            {repositories.map((repository: Repository) => (
              <tr key={repository.id} className={`${styles.tableLine} cursor-pointer`} onClick={() => handleAddDetails(repository)}>
                <td className={styles.cell}>{repository.name}</td>
                <td className={styles.cell}>{repository.language}</td>
                <td className={styles.cell}>{repository.numberOfForks}</td>
                <td className={styles.cell}>{repository.numberOfStars}</td>
                <td className={styles.cell}>{repository.dateOfUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Pagination/>
      </div>
    </div>
  )
}

export default Table
