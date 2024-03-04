import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import NotMatch from "./components/NotMatch";
import menu from "./data/menu";
import { MenuChild } from "./types/index.ts";

let routeMenuList: MenuChild[] = [];
menu.forEach((rootMenuInfo) => {
  const children = rootMenuInfo.children;
  routeMenuList = routeMenuList.concat(children);
});

function App() {
  useEffect(() => {
    //
  }, []);

  const routes = (
    <>
      {routeMenuList.map((menuInfo, index) => {
        const Component = menuInfo.component as () => JSX.Element;
        return (
          <Route key={index} path={menuInfo.path} element={<Component />} />
        );
      })}
    </>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {routes}
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;