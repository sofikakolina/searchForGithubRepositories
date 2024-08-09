'use client'
import Details from '@/components/details/Details'
import Table from '@/components/table/Table'
import { useAppSelector } from '@/store/store'

export default function Home() {

  const persons = useAppSelector(state => state.person.persons)

  if (!persons || persons.length==0) return (
    <div className="centering">
      <h1>Добро пожаловать</h1>
    </div>
  )

  return (
    <div className="grid grid-cols-3">
      <div className='col-span-2'>
        <Table />
      </div>
      <div className='col-span-1'>
        <Details />
      </div>
    </div>
  );
}
 