const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    let {beverage, food, id} = el

    return (
        <tr>
            <td>{beverage}</td>
            <td>{food}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Edit</button>
                <button onClick={() => setDataToEdit(id)}>Delete</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
