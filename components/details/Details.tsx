import React from 'react'
import { useAppSelector } from '@/store/store'
import styles from "./styles.module.scss"
import { FaStar } from "react-icons/fa";

const Details = () => {
    const details = useAppSelector(state => state.details); 
    
    if (!details.name) {
        return (
            <div className='centering'>
                <h3>Выберите репозиторий</h3>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.name}>{details.name}</h2>
            <div className={styles.languageAndStars}>
                {details.language && <h4 className={styles.language}>{details.language}</h4>}
                <div>
                    <FaStar color="#FFB400" size={24}/>
                    <h4 className={styles.cell}>{details.numberOfStars}</h4>
                </div>
            </div>
            {details.topics?.length > 0 && (
                <div className={styles.details}>
                    {details.topics.map(topic => <h3 className={styles.topic}>{topic}</h3>)}
                </div>
            )}
            <h5>{details.license}</h5>
        </div>
    )
}

export default Details;
