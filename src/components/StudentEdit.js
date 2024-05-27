import React, { useContext, useRef} from 'react'
import "../css/shopEdit.css"
import { AppContext } from '../context/Context'
export default function StudentEdit() {

    const {setShowEdit,currentEdit,updateInfo} = useContext(AppContext)


  const nameRef = useRef()
  const gradeRef = useRef()
  const onSub = (e) => {
    // מונע את הברירת מחדל של ריפרש לעמוד
    e.preventDefault();
    const newStudent = {
        name: nameRef.current.value,
        grade: gradeRef.current.value,
        id: currentEdit.id
    }
    updateInfo(newStudent,currentEdit.id)
    setShowEdit(false)
  }
  return (
    <div className='edit_dark_window'>
      <div className='dark_box_inside'>
      <form onSubmit={onSub} className=''>
        <label>Name:</label>
        <input defaultValue={currentEdit.name} ref={nameRef} type="text" className='form-control' />
        <label>Grade:</label>
        <input defaultValue={currentEdit.grade} ref={gradeRef} type="nubmer" className='form-control' />
        <button className='btn btn-success mt-3'>Update</button>
        <button onClick={() => {setShowEdit(false)}} type="button" className='btn btn-danger mt-3 ms-3'>Cancel</button>
      </form>
      </div>
    </div>
  )
}