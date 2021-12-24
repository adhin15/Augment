import "./index.css";
import "antd/dist/antd.css";
import Routes from "./route/routes";
import { UserProvider } from "./context/UserContex";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
