import Home from "./pages/Home";
import { Route } from "react-router-dom";

export const DefaultRoutes = (
  <>
    <Route path="/">
      <Route index element={<Home />} />
    </Route>
  </>
);
