import Data from "../data.json";
import Timeline from "./component/Timeline";
import BackgroundComponent from "./component/Background";
import logo from "./assets/logo.svg";
import "./app.css";

const data = Data.data;
function App() {
  return <Container></Container>;
}

function Container() {
  return (
    <div className="content-boundary">
      <BackgroundComponent>
        <Title></Title>
        <Content></Content>
      </BackgroundComponent>
    </div>
  );
}
function Content() {
  return <Timeline items={data}></Timeline>;
}

function Title() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "10px",
    },
    logo: {
      width: "48px",
      height: "48px",
      marginRight: "10px",
      alignSelf: "flex-start",
    },
  };

  return (
    <div className="title-container">
      <img src={logo} alt="Logo" className="title-logo" />
    </div>
  );
}
export default App;
