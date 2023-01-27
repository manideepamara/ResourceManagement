import React,{useState} from "react";

import TopBar from "./components/TopBar";
import CreateItem from "./components/CreateItem";
import Resource from "./components/Resource";

function App() {
  const [tabList, setTabList] = useState({
    items: ["Resources", "Requests", "Users"],
    selected: 0,
  });
  const [view, setView] = useState("resource");
  return (
    <>
      <TopBar setView={setView} view={view}/>
      {view === "resource" ? (
        <Resource setTabList={setTabList} tabList={tabList} />
      ) : (
        <CreateItem setView={setView} setTabList={setTabList} tabList={tabList} />
      )}
    </>
  );
}

export default App;
