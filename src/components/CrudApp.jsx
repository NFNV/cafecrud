import { useState, useEffect } from "react"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import Loader from "./Loader"


const initialDb = [

]

const CrudApp = () => {
  const [db, setDb] = useState(initialDb)

  const [dataToEdit, setDataToEdit] = useState(null)

  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const res = await fetch("http://localhost:3001/items"),
     json = await res.json();
    setDb(json)
  }

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [])

  const createData = async (data) => {
      data.id = Date.now()
      
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
        }
        await fetch("http://localhost:3001/items", options)
        getData()    
  }

  const updateData = async (data) => {
    let endpoint = `http://localhost:3001/items/${data.id}`

    const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
    }

   await fetch(endpoint, options)

    getData()
  }

  const deleteData = async (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the ID ${id}?`
    )

    if (isDelete) {
        let endpoint = `http://localhost:3001/items/${id}`

        let options = {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        }
        await fetch(endpoint, options)

     
      getData()

    } else return
  }

  return (
    <div>
      <h2>CRUD Café</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  )
}

export default CrudApp
