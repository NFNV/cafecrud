import { useState, useEffect } from "react"

const initialForm = {
    beverage: "",
    food: "",
    id: null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.beverage || !form.food) {
            alert("Incomplete data")
            return
        }
        if(form.id === null){
            createData(form)
        }else{
            updateData(form)
        }
        handleReset()
    }
    
    const handleReset = (e) => {
        setForm(initialForm)
        setDataToEdit(null)
    }

    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit)
      }else{
        setForm(initialForm)
      }
    }, [dataToEdit])
    

    return (
        <div>
        <h3>{dataToEdit ? 'Edit' : 'Add'}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="beverage" placeholder="Beverage" onChange={handleChange} value={form.beverage}/>
            <input type="text" name="food" placeholder="Food" onChange={handleChange} value={form.food}/>
            <input type="submit" value="Send" />
            <input type="reset" value="Clean" onClick={handleReset}/>
        </form>
        </div>
    )
}

export default CrudForm
