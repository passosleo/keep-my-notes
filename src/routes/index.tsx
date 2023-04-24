import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Notes from "../pages/Notes";
import Profile from "../pages/Profile";
import Layout from "../layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<Notes />} />
          <Route path="/profile" element={<Profile />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
