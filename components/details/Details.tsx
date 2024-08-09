import React from 'react'
import { useAppSelector } from '@/store/store'
import styles from "./styles.module.scss"
const Details = () => {
    const details = useAppSelector(state => state.details);  // Используем `details` как в store
    if (!details.name) {
        return (
            <div className="centering">
                <h3>Выберите репозиторий</h3>
            </div>
        )
      }
    
      return (
        <div>
            <h2>{details.name}</h2>
            <div className='flex justify-between'>
                <h4 className={styles.cell}>{details.language}</h4>
                <h4 className={styles.cell}>{details.numberOfStars}</h4>
            </div>
            
            <h4 className={styles.cell}>{details.numberOfForks}</h4>
            
            <h4 className={styles.cell}>{new Date(details.dateOfUpdate).toLocaleDateString("en-GB")}</h4>
        </div>
      )
}

export default Details;
