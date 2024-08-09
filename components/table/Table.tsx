'use client'
import { useAppSelector } from '@/store/store'
import styles from "./styles.module.scss"
import { addDetail } from '@/store/features/details'
import { useAppDispatch } from '@/store/store'

interface Repository {
  id: number;
  name: string;
  language: string;
  numberOfForks: number;
  numberOfStars: number;
  dateOfUpdate: string;
}

const Table = () => {
  const repositories = useAppSelector(state => state.repository.repositories)
  const dispatch = useAppDispatch()

  const handleAddDetails = (repository: Repository) => {
    dispatch(addDetail({
      id: repository.id,
      name: repository.name,
      language: repository.language,
      numberOfForks: repository.numberOfForks,
      numberOfStars: repository.numberOfStars,
      dateOfUpdate: repository.dateOfUpdate // Дата уже должна быть в правильном формате
    }))
  }

  if (repositories.length === 0) {
    return <p>Загрузка...</p> // Показать временный контент
  }

  return (
    <div>
      <h1>Результаты поиска</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableLine}>
            <th className={styles.cellHead}>Название</th>
            <th className={styles.cellHead}>Язык</th>
            <th className={styles.cellHead}>Число форков</th>
            <th className={styles.cellHead}>Число звезд</th>
            <th className={styles.cellHead}>Дата обновления</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repository: Repository) => (
            <tr key={repository.id} className={`${styles.tableLine} cursor-pointer`} onClick={() => handleAddDetails(repository)}>
              <td className={styles.cell}>{repository.name}</td>
              <td className={styles.cell}>{repository.language}</td>
              <td className={styles.cell}>{repository.numberOfForks}</td>
              <td className={styles.cell}>{repository.numberOfStars}</td>
              <td className={styles.cell}>{new Date(repository.dateOfUpdate).toLocaleDateString("en-GB")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
