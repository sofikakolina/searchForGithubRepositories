import React from 'react'
import { useAppSelector } from '@/store/store'
import styles from "./styles.module.scss"
const Details = () => {
    const details = useAppSelector(state => state.details);  // Используем `details` как в store
    if (!details.name) {
        return (
            <div className="centering">
            <h1>Добро пожаловать</h1>
          </div>
        )
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
                <tr key={details.id} className={styles.tableLine}>
                  <td className={styles.cell}>{details.name}</td>
                  <td className={styles.cell}>{details.language}</td>
                  <td className={styles.cell}>{details.numberOfForks}</td>
                  <td className={styles.cell}>{details.numberOfStars}</td>
                  <td className={styles.cell}>{new Date(details.dateOfUpdate).toLocaleDateString("en-GB")}</td>
                </tr>
            </tbody>
          </table>
        </div>
      )
}

export default Details;
