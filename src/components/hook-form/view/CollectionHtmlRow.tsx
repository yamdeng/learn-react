export default function CollectionHtmlRow(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
}) {
  const { arrayFieldIndex, removeArrayField } = props;
  return (
    <>
      <tr>
        <td>depth2</td>
        <td>category2</td>
        <td>
          <input type="text" placeholder="NAME" name="name" />
        </td>
        <td>
          <input type="text" placeholder="LENGTH" name="length" />
        </td>
        <td>
          <select name="data-type" id="data-type" className="select">
            <option value="">타입</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </td>
        <td>
          <select name="required" id="required" className="select">
            <option value="">필수여부</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </td>
        <td colSpan={2}>
          <button className="button button-info">[+Field]</button>
          <button className="button button-success">[+List]</button>
        </td>
        <td>
          <button
            className="button button-cancel"
            onClick={() => removeArrayField(arrayFieldIndex)}
          >
            삭제
          </button>
        </td>
      </tr>
    </>
  );
}
