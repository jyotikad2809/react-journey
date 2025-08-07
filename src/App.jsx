import Card from "./component/Card";
import Data from "../data.json";
import BackgroundComponent from "./component/Background";

const data = Data.data;
function App() {
  return (
    <>
      <BackgroundComponent>
        {data.map((dt) => (
          <Card key={dt.key} title={dt.title} skills={dt.skills} />
        ))}
      </BackgroundComponent>
    </>
  );
}

export default App;
