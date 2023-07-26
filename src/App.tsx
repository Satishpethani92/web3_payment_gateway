import "./App.scss";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallback";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}} resetKeys={[window.location.href]}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
