import useTestStore2 from "../../store/useTestStore2";

/**

  1.전체 state change test
  2.개별 state change test

 */

const Name = function Name({ name }) {
  console.log("Name Component Render");
  return <p>Name Component {name}</p>;
};

export default function CreateStoreTest() {
  // 전체 state select

  const name = useTestStore2((state) => state.name);
  // const changeProfile = useTestStore((state) => state.changeProfile);
  // const profile = useTestStore((state) => state.profile);

  return (
    <div>
      create test
      <p>name : {name}</p>
      <Name name={name} />
      {/* <p>profile : {profile ? JSON.stringify(profile) : "not rofile"}</p> */}
      {/* <div>
        <button onClick={() => changeProfile({ name: "profileName" })}>
          changeProfile
        </button>
      </div> */}
    </div>
  );
}
