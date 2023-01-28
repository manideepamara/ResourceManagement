import React, { useState } from "react";

import TopBar from "./components/TopBar";
import CreateItem from "./components/CreateItem";
import Resource from "./components/Resource";
import LoginForm from "./components/LoginForm";
import { RESOURCE_VIEW, TAB_LIST } from "./components/constants";

function App() {
  const [tabList, setTabList] = useState({
    items: TAB_LIST,
    selected: 0,
  });
  const [view, setView] = useState(RESOURCE_VIEW);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {!isAuth ? (
        <LoginForm setIsAuth={setIsAuth}/>
      ) : (
        <>
          <TopBar setIsAuth={setIsAuth} setView={setView} view={view} />
          {view === RESOURCE_VIEW ? (
            <Resource setTabList={setTabList} tabList={tabList} />
          ) : (
            <CreateItem
              setView={setView}
              setTabList={setTabList}
              tabList={tabList}
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
