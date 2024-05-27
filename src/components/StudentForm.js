import { useRef , useContext} from "react"
import { AppContext } from "../context/Context"


//useRef 
export default function StudentForm() {

    const {addStudent,resetList} = useContext(AppContext)

    const nameRef = useRef()
    const gradeRef = useRef()

    // prevents user from refreshing the page
  const onSub = (e) => {
    e.preventDefault();
    const newStudent = {
        name: nameRef.current.value,
        grade: gradeRef.current.value,
        id: Date.now()
    }
    if(newStudent.name.length >= 3 && (newStudent.grade > 0 && newStudent.grade < 100)){
        addStudent(newStudent)
        
    }
  }

  return (
    <div className='container'>
      <h1>Order Form:</h1>
      <form onSubmit={onSub} className='col-md-5'>
        <label>Name:</label>
        <input  ref={nameRef} type="text" className='form-control' />
        <label>Grade:</label>
        <input ref={gradeRef} type="nubmer" defaultValue="1" className='form-control' />
        <button className='btn btn-success mt-3'>Add+</button>
        <button onClick={resetList} type="button" className="btn btn-danger mt-3 ms-3">Reset</button>
      </form>
    </div>
  )
}
