import { useForm, SubmitHandler } from "react-hook-form";
import { FinalFormInput } from "../../types";
import { finalFormValues } from "../../utils/values";
import { yupResolver } from "@hookform/resolvers/yup";
import { finalSchema } from "../../utils/schemas";

/*

  1.list input schema 결정
   -form getValue와 실질적으로 사용하는 값과의 갭이 있음

*/

export default function HookFormHtmlFinal(): React.ReactNode {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinalFormInput>({
    defaultValues: finalFormValues,
    resolver: yupResolver(finalSchema),
  });

  const onSubmit: SubmitHandler<FinalFormInput> = (data: FinalFormInput) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid-root-container">
        <div
          className="grid-input-container"
          style={{ gridTemplateColumns: "160px 430px" }}
        >
          <div className="div-label">이름 :</div>
          <div className="div-input">
            <input type="text" placeholder="NAME" {...register("name")} />
            {errors && errors.name ? (
              <span className="error_message">{errors.name.message}</span>
            ) : null}
          </div>
        </div>
        <div
          className="grid-input-container"
          style={{ gridTemplateColumns: "160px 430px" }}
        >
          <div className="div-label">이메일 :</div>
          <div className="div-input">
            <input type="text" placeholder="EMAIL" {...register("email")} />
            {errors && errors.email ? (
              <span className="error_message">{errors.email.message}</span>
            ) : null}
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
          <thead>
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
          </thead>
          <tbody>
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
                <input
                  type="text"
                  placeholder="DESCRIPTION"
                  name="description"
                />
              </td>
              <td style={{ textAlign: "center" }}>
                <label className="switch">
                  <input type="checkbox" />
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
                <button className="button button-cancel">취소</button>
              </td>
            </tr>
          </tbody>
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
          <thead>
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
          </thead>
          <tbody>
            <tr>
              <td>depth</td>
              <td>category</td>
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
              <td>
                <input
                  type="text"
                  placeholder="DESCRIPTION"
                  name="description"
                />
              </td>
              <td style={{ textAlign: "center" }}>
                <label className="switch">
                  <input type="checkbox" />
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
                <button className="button button-cancel">취소</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-container right">
        <button className="button button-cancel">취소</button>
        <button type="submit" className="button button-info">
          저장
        </button>
      </div>
    </form>
  );
}
