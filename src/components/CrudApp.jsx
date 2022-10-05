import { useState, useEffect } from "react"
import axios from "axios"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import Loader from "./Loader"


const initialDb = [
  {
    id: 1,
    beverage: "cappuccino",
    food: "apple roll",
  },
  {
    id: 2,
    beverage: "espresso",
    food: "mini cookie",
  },
  {
    id: 3,
    beverage: "cortado doble",
    food: "medialuna",
  },
  {
    id: 4,
    beverage: "americano",
    food: "vainilla cookie",
  },
]

const CrudApp = () => {
  const [db, setDb] = useState(initialDb)

  const [dataToEdit, setDataToEdit] = useState(null)

  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/items"),
      json = await res.data;
    setDb(json)
  }

  useEffect(() => {
    setLoading(true)
    getData()
    setLoading(false)
  }, [])

  const createData = async (data) => {
    data.id = Date.now()

    let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify(data)
    }
    let res = await axios("http://localhost:3001/items", options),
    el = await res.data
    setDb(...db, el)
  }

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el))
    setDb(newData)
  }
  const deleteData = async (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the ID ${id}?`
    )

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id)
        let endpoint = `http://localhost:3001/items/${id}`

        let options = {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        },
        res = await axios(endpoint, options),
        el = await res.data
      setDb(newData)
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
