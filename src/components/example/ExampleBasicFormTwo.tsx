export default function ExampleBasicFormTwo(): React.ReactNode {
  return (
    <div className="grid-root-container">
      <div className="grid-input-container">
        <div className="div-label">ID :</div>
        <div className="div-input">
          <input type="text" placeholder="ID" name="id" required />
        </div>
      </div>
      <div className="grid-input-container">
        <div className="div-label">이름 :</div>
        <div className="div-input">
          <input type="text" placeholder="NAME" name="name" required />
        </div>
      </div>

      <div className="grid-input-container">
        <div className="div-label">나이 :</div>
        <div className="div-input">
          <input type="text" placeholder="AGE" name="age" required />
        </div>
      </div>
      <div className="grid-input-container">
        <div className="div-label">이메일 :</div>
        <div className="div-input">
          <input type="text" placeholder="EMAIL" name="email" required />
        </div>
      </div>

      <div className="grid-input-container">
        <div className="div-label">암호 :</div>
        <div className="div-input">
          <input type="text" placeholder="PASSWORD" name="password" required />
        </div>
      </div>
      <div className="grid-input-container">
        <div className="div-label">암호확인 :</div>
        <div className="div-input">
          <input
            type="text"
            placeholder="confirm PASSWORD"
            name="confirm-password"
            required
          />
        </div>
      </div>

      <div className="grid-input-container">
        <div className="div-label">남/여 :</div>
        <div className="div-input radio">
          <input type="radio" id="sex_male" name="sex" value="male" />
          <label htmlFor="sex_male">남</label>
          <input type="radio" id="sex_female" name="sex" value="female" />
          <label htmlFor="sex_female">여</label>
        </div>
      </div>
      <div className="grid-input-container">
        <div className="div-label">직업 :</div>
        <div className="div-input radio">
          <select name="job" id="job">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>

      <div className="grid-input-container">
        <div className="div-label">알림 :</div>
        <div className="div-input radio">
          <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="grid-input-container">
        <div className="div-label">설명 :</div>
        <div className="div-input">
          <textarea className="textarea">Some text...</textarea>
        </div>
      </div>

      <div></div>
      <div className="right">
        <button className="button button-cancel">취소</button>
        <button className="button button-info">저장</button>
      </div>
    </div>
  );
}
