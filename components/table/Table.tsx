'use client'
import { useAppSelector } from '@/store/store'
import styles from "./styles.module.scss"
import { addDetail } from '@/store/features/details'
import { useAppDispatch } from '@/store/store'

interface Person {
  id: number;
  name: string;
  language: string;
  numberOfForks: number;
  numberOfStars: number;
  dateOfUpdate: string;
}

const Table = () => {
  const persons = useAppSelector(state => state.person.persons)
  const dispatch = useAppDispatch()

  const handleAddDetails = (person: Person) => {
    dispatch(addDetail({
      id: person.id,
      name: person.name,
      language: person.language,
      numberOfForks: person.numberOfForks,
      numberOfStars: person.numberOfStars,
      dateOfUpdate: person.dateOfUpdate // Дата уже должна быть в правильном формате
    }))
  }

  if (persons.length === 0) {
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
          {persons.map((person: Person) => (
            <tr key={person.id} className={styles.tableLine} onClick={() => handleAddDetails(person)}>
              <td className={styles.cell}>{person.name}</td>
              <td className={styles.cell}>{person.language}</td>
              <td className={styles.cell}>{person.numberOfForks}</td>
              <td className={styles.cell}>{person.numberOfStars}</td>
              <td className={styles.cell}>{new Date(person.dateOfUpdate).toLocaleDateString("en-GB")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
