import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import NotMatch from "./components/NotMatch";
import menu from "./data/menu";
import { MenuChild } from "./types/index.ts";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";

const globalStyles = (
  <GlobalStyles
    styles={() => ({
      html: {
        height: "100%",
        fontSize: "17px",
      },
      body: {
        height: "100%",
        fontSize: "21px",
      },
    })}
  />
);

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
      <CssBaseline />
      {globalStyles}
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
