//import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Centre from "./components/Centre";
import AddUser from "./components/AddUser";
import Drawer from "./components/Drawer";

function App() {
  return (
    <>
      <div className="container">
        {/* <Sidebar /> */}
        <Drawer />
        <Routes>
          <Route exact path="/" element={<Sidebar />} />
          <Route exact path="/hive" element={<Centre />} />
          <Route exact path="/users/newhive" element={<AddUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
