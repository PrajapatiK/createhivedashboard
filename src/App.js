//import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Centre from "./components/Centre";
import AddUser from "./components/AddUser";
import Drawer from "./components/Drawer";
//import TextFieldSizes from "/EditHiveUser";
import PageNotFound from "./components/PageNotFound";
import TextFieldSizes from "./EditHiveUser";

function App() {
  return (
    <>
      <div className="container">
        <Drawer />
        <Routes>
          <Route path="*" exact={true} element={<PageNotFound />} />
          <Route exact path="/" element={<Sidebar />} />
          <Route exact path="/hive" element={<Centre />} />
          <Route exact path="/users/newhive" element={<AddUser />} />
          <Route exact path="/users/edithive/:id" element={<TextFieldSizes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
