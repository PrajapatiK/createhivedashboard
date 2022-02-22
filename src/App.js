import "./App.css";
import WelcomePage from "./components/WelcomePage";
import { Routes, Navigate, Route } from "react-router-dom";
import HiveCardEntries from "./components/HiveCardEntries";
import AddUser from "./components/AddUser";
import Drawer from "./components/Drawer";
import PageNotFound from "./components/PageNotFound";
import TextFieldSizes from "./EditHiveUser";

function App() {
  return (
    <>
      <div className="container">
        <Drawer />
        <Routes>
          <Route path="/404error" exact={true} element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404error" />} />
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/hive" element={<HiveCardEntries />} />
          <Route exact path="/users/newhive" element={<AddUser />} />
          <Route
            exact
            path="/users/edithive/:id"
            element={<TextFieldSizes />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
