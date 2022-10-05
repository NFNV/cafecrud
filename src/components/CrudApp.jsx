import { useState } from "react"

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

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/items"),
      json = await res.data;
    setDb(json)
  }

  useEffect(() => {
    getData()
  }, [])

  const createData = (data) => {
    data.id = Date.now()
    setDb(...db, data)
  }
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el))
    setDb(newData)
  }
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the ID ${id}?`
    )

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id)
      setDb(newData)
    } else return
  }

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudFrom
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
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
