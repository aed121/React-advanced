import { createContext, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider({children}){
  const [grades_ar,setGrades_ar] = useState([
    {name:"Jacob",grade:90, id:1},
    {name:"Sara",grade:85, id:2},
    {name:"Jimmy",grade:84, id:3},
  ])

  //will be used to show the edit window as a pop-up
  const [showEdit , setShowEdit] = useState(false)

  //will be used to get the info for the student that we want to edit
  const [currentEdit , setCurrentEdit] = useState({})

  useLayoutEffect(() => {
    if(localStorage.getItem("grades_ar")){
      setGrades_ar(JSON.parse(localStorage.getItem("grades_ar")))
    }
  },[])

  const addStudent = (newStudent) => {
    setGrades_ar([...grades_ar,newStudent])

    localStorage.setItem('grades_ar',JSON.stringify([...grades_ar,newStudent]))
  }

  const resetList = () => {
    if(window.confirm("Are you sure you want to reset the Students?")){
      setGrades_ar([])
    }
    localStorage.setItem("grades_ar",JSON.stringify([]))
  }

  //update function of the recieved student object
  const updateInfo = (_updateItem,_id) => {
    const map_ar = grades_ar.map(item => {
      //while in map fucntion , if we find a student with an id that matches the id in the function,
      //we will edit the student and return it with the modified paramters.
      // and not the same object as it was prior to the update
      if(item.id === _id){
        return _updateItem
      }
      return item
    })
    setGrades_ar(map_ar)
    localStorage.setItem("grades_ar",JSON.stringify(map_ar))
  }

  const deleteStudent = (_id) => {
    const fliterArr = grades_ar.filter(item => {
        return item.id !== _id
    })
    setGrades_ar(fliterArr)
    localStorage.setItem("grades_ar",JSON.stringify(fliterArr))
  }

  const globalVal = {
    grades_ar,addStudent,resetList,deleteStudent,setShowEdit,showEdit,
    currentEdit,setCurrentEdit,updateInfo
  }

  return (
    <AppContext.Provider value={globalVal} >
      {children}
    </AppContext.Provider>
  )
}