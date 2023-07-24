import "./App.scss";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultRoutes } from "./routes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}} resetKeys={[window.location.href]}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            {DefaultRoutes}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
