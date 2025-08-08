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
        <Content className="content-class"></Content>
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
      zIndex: 10,
    },
    logo: {
      width: "150px",
      height: "120px",
    },
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
    </div>
  );
}

export default App;
