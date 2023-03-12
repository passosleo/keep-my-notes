import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Notes from "../pages/Notes";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Notes />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
