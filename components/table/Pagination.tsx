import React, { useState } from 'react';
import styles from "./pagination.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '@/store/store'
import { addPage, addSize } from '@/store/features/pagination';

const Pagination = () => {
  const page = useAppSelector(state => state.pagination.page)
  const size = useAppSelector(state => state.pagination.size)
  const total = useAppSelector(state => state.pagination.total)
  const dispatch = useAppDispatch()

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(addSize({ size: parseInt(event.target.value) }))
  };

  const handleMinusPage = () => {
    dispatch(addPage({ page: page-1 }))
  };
  const handlePlusPage = () => {
    dispatch(addPage({ page: page+1 }))
  };

  return (
    <div className={styles.main}>
      <div className="flex items-center gap-2">
        <h3>Rows per page:</h3>
        <select value={size} onChange={handleRowsPerPageChange} className={styles.select}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </div>
      <h3>{page ? page*size+1 : 1}-{(page+1)*size} of {total}</h3>
      <div className="flex gap-3">
        <button onClick={handleMinusPage}>
          <IoIosArrowBack />
        </button>
        <button onClick={handlePlusPage}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
