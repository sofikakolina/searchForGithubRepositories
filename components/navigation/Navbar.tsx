'use client'

import { useState } from 'react'
import styles from './styles.module.scss'

const Navbar = () => {
  const [search, setSearch] = useState("")
  return (
    <div className={styles.navbar}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Введите поисковый запрос'/>
      <button>
        Искать
      </button>
    </div>
  )
}

export default Navbar