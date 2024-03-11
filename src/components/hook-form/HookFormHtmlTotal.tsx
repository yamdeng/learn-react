export default function HookFormHtmlTotal(): React.ReactNode {
  return (
    <>
      <div className="grid-root-container">
        <div
          className="grid-input-container"
          style={{ gridTemplateColumns: "160px 430px" }}
        >
          <div className="div-label">이름 :</div>
          <div className="div-input">
            <input type="text" placeholder="NAME" name="name" required />
          </div>
        </div>
        <div
          className="grid-input-container"
          style={{ gridTemplateColumns: "160px 430px" }}
        >
          <div className="div-label">이메일 :</div>
          <div className="div-input">
            <input type="text" placeholder="EMAIL" name="email" required />
          </div>
        </div>
      </div>

      {/* input */}
      <div className="table-container">
        <div
          className="right"
          style={{
            borderBottom: "1px solid gray",
            padding: 5,
            marginBottom: 10,
          }}
        >
          <button className="button button-info" style={{ padding: "5px 8px" }}>
            [+Field]
          </button>
          <button
            className="button button-success"
            style={{ padding: "5px 8px" }}
          >
            [+Object]
          </button>
          <button
            className="button button-success"
            style={{ padding: "5px 8px" }}
          >
            [+List]
          </button>
          <button
            className="button button-error"
            style={{ padding: "5px 8px" }}
          >
            [-delete]
          </button>
        </div>

        <table style={{ width: "100%" }}>
          <tr>
            <th style={{ width: 80 }}>depth</th>
            <th style={{ width: 80 }}>구분</th>
            <th style={{ width: 110 }}>이름</th>
            <th style={{ width: 110 }}>길이</th>
            <th style={{ width: 110 }}>타입</th>
            <th style={{ width: 110 }}>필수</th>
            <th style={{ width: 230 }}>설명</th>
            <th style={{ width: 110 }}>알림여부</th>
            <th style={{ width: 110 }}>삭제</th>
          </tr>
          <tr>
            <td>depth</td>
            <td>category</td>
            <td>
              <input type="text" placeholder="NAME" name="name" required />
            </td>
            <td>
              <input type="text" placeholder="LENGTH" name="length" required />
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
              <input
                type="text"
                placeholder="DESCRIPTION"
                name="description"
                required
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </td>
            <td>
              <button className="button button-cancel">취소</button>
            </td>
          </tr>
          <tr>
            <td>depth2</td>
            <td>category2</td>
            <td>
              <input type="text" placeholder="NAME" name="name" required />
            </td>
            <td>
              <input type="text" placeholder="LENGTH" name="length" required />
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
              <button className="button button-cancel">취소</button>
            </td>
          </tr>
        </table>
      </div>

      {/* output */}
      <div className="table-container">
        <div
          className="right"
          style={{
            borderBottom: "1px solid gray",
            padding: 5,
            marginBottom: 10,
          }}
        >
          <button className="button button-info" style={{ padding: "5px 8px" }}>
            [+Field]
          </button>
          <button
            className="button button-success"
            style={{ padding: "5px 8px" }}
          >
            [+Object]
          </button>
          <button
            className="button button-success"
            style={{ padding: "5px 8px" }}
          >
            [+List]
          </button>
          <button
            className="button button-error"
            style={{ padding: "5px 8px" }}
          >
            [-delete]
          </button>
        </div>

        <table style={{ width: "100%" }}>
          <tr>
            <th style={{ width: 80 }}>depth</th>
            <th style={{ width: 80 }}>구분</th>
            <th style={{ width: 110 }}>이름</th>
            <th style={{ width: 110 }}>길이</th>
            <th style={{ width: 110 }}>타입</th>
            <th style={{ width: 110 }}>필수</th>
            <th style={{ width: 230 }}>설명</th>
            <th style={{ width: 110 }}>알림여부</th>
            <th style={{ width: 110 }}>삭제</th>
          </tr>
          <tr>
            <td>depth</td>
            <td>category</td>
            <td>
              <input type="text" placeholder="NAME" name="name" required />
            </td>
            <td>
              <input type="text" placeholder="LENGTH" name="length" required />
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
              <input
                type="text"
                placeholder="DESCRIPTION"
                name="description"
                required
              />
            </td>
            <td style={{ textAlign: "center" }}>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </td>
            <td>
              <button className="button button-cancel">취소</button>
            </td>
          </tr>
          <tr>
            <td>depth2</td>
            <td>category2</td>
            <td>
              <input type="text" placeholder="NAME" name="name" required />
            </td>
            <td>
              <input type="text" placeholder="LENGTH" name="length" required />
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
              <button className="button button-cancel">취소</button>
            </td>
          </tr>
        </table>
      </div>

      <div className="table-container right">
        <button className="button button-cancel">취소</button>
        <button className="button button-info">저장</button>
      </div>
    </>
  );
}
