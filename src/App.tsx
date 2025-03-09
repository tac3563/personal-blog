import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.tsx";
import Layout from "./components/Layout/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
