import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { NotesPage } from "../pages/Notes";
import { ProfilePage } from "../pages/Profile";
import { Layout } from "../layout";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" element={<NotesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
