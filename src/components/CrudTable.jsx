import CrudTableRow from "./CrudTableRow"

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
      <h3>Coffee & food</h3>
      <table>
        <thead>
          <tr>
            <th>Beverage</th>
            <th>Food</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan="3">No data</td>
            </tr>
          )}
          {data.length !== 0 &&
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CrudTable
