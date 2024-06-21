import { memo, useState, useCallback } from "react";
// import useTestStore from "../../store/useTestStore";

/**

  1.전체 state change test
  2.개별 state change test

 */

const Name = memo(function Name({ name }) {
  console.log(`Name Component Render : ${name}`);
  // debugger;
  return <p>Name Component {name}</p>;
});

// const Name = function Name({ name }) {
//   console.log("Name Component Render");
//   return <p>Name Component {name}</p>;
// };

export default memo(function CreateTest() {
  console.log("CreateTest render");
  const [name, setName] = useState("");
  // 전체 state select
  // const { name, changeName } = useTestStore();

  // const name = useTestStore((state) => state.name);
  // const changeName = useTestStore((state) => state.changeName);
  // const changeProfile = useTestStore((state) => state.changeProfile);
  // const profile = useTestStore((state) => state.profile);

  const changeName = useCallback((name) => {
    setName(name);
  }, []);

  return (
    <div>
      create test
      {/* <p>name : {name}</p>
      <p>age : {age}</p> */}
      <Name name={name} />
      {/* <p>profile : {profile ? JSON.stringify(profile) : "not rofile"}</p> */}
      <div>
        <button onClick={() => changeName("ays17")}>changeName</button>
        {/* <button onClick={() => changeProfile({ name: "profileName" })}>
          changeProfile
        </button> */}
      </div>
    </div>
  );
});
