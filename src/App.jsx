import Card from "./component/Card";
import Data from "../data.json";
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
  return data.map((dt) => (
    <Card key={dt.key} title={dt.title} skills={dt.skills} />
  ));
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
