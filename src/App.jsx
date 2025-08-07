import { useState } from "react";
import Card from "./component/Card";
import Data from "../data.json";

const data = Data.data;
function App() {
  return (
    <>
      {data.map((dt) => (
        <Card key={dt.key} title={dt.title} skills={dt.skills} />
      ))}
    </>
  );
}

export default App;
