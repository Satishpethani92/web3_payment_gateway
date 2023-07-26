import { Route, Routes } from "react-router-dom";
import { DefaultRoutes } from "../routes";
import NotFound from "../pages/NotFound";

const Layout = () => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <Routes>
        {DefaultRoutes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Layout;
