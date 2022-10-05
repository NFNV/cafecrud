import { useState, useEffect } from "react"

const initialForm = {
    beverage: "",
    food "",
    id: null
}

const CrudForm = () => {

    const [form, setform] = useState(initialForm)

    const handleChange = () => {}
    const handleSubmit = () => {}
    const handleReset = () => {}

    return (
        <div>
        <h3>Add</h3>
        <form>
            <input type="text" name="beverage" placeholder="Beverage" onChange={handleChange} value={form.beverage}/>
            <input type="text" name="food" placeholder="Food" onChange={handleChange} value={form.food}/>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
        </div>
    )
}

export default CrudForm
