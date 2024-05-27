import React , {useContext} from 'react'
import { AppContext } from '../context/Context'
import StudentItem from './StudentItem'

export default function StudentList() {
    const {grades_ar} = useContext(AppContext)
    console.log(grades_ar)
  return (
    <div className='container mt-4'>
      <div className='row'>
        {grades_ar.map(item => {
            return(
                <StudentItem key={item.id} item={item} />
            )
        })}
      </div>
    </div>
  )
}
