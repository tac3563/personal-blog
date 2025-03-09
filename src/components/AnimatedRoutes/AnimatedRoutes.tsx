import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper.tsx";
import Home from "../../pages/Home.tsx";
import Blog from "../../pages/Blog.tsx";
import Newsletter from "../../pages/Newsletter.tsx";
import About from "../../pages/About.tsx";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode={"wait"} location={location} key={location.pathname}>
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/Newsletter"
          element={
            <PageWrapper>
              <Newsletter />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
