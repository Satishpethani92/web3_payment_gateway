import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Login from "./pages/Login";

export const DefaultRoutes = (
  <>
    <Route path="/">
      <Route index element={<Home />} />
    </Route>
  </>
);

export const AuthRoutes = (
  <>
    <Route path="/">
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Route>
  </>
);
