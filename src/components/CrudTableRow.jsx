const CrudTableRow = ({el, setDataToEdit, deleteData}) => {

    const {beverage, food, id} = el

    return (
        <tr>
            <td>{beverage}</td>
            <td>{food}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Edit</button>
                <button onClick={() => deleteData(id)}>Delete</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
