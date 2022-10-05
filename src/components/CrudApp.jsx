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

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudFrom />
      <CrudTable data={db} />
    </div>
  )
}

export default CrudApp;
