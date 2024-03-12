export default function PlainHtmlRow(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
}) {
  const { arrayFieldIndex, removeArrayField } = props;
  return (
    <tr>
      <td>depth</td>
      <td>category</td>
      <td>
        <input type="text" placeholder="NAME" name="name" />
        <span className="error_message">이름은 필수값입니다</span>
      </td>
      <td>
        <input type="text" placeholder="LENGTH" name="length" />
        <span className="error_message">
          이름은 필수값입니다. 이름은 필수값입니다
        </span>
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
      <td>
        <input type="text" placeholder="DESCRIPTION" name="description" />
      </td>
      <td style={{ textAlign: "center" }}>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
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
  );
}
