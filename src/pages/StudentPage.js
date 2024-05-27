import React , {useContext} from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'
import StudentEdit from '../components/StudentEdit'
import {AppContext} from '../context/Context'

export default function StudentPage() {

  const {showEdit} = useContext(AppContext)

  return (
    <>
      { showEdit && <StudentEdit /> }
      <StudentForm />
      <StudentList />
    </>
  )
}
