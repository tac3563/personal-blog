import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper.tsx";
import Home from "../../pages/Home.tsx";
import Blog from "../../pages/Blog.tsx";
import Newsletter from "../../pages/Newsletter.tsx";
import About from "../../pages/About.tsx";
import SingleBlog from "../../pages/SingleBlog.tsx";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        {[
          { path: "/about", Component: About },
          { path: "/newsletter", Component: Newsletter },
        ].map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PageWrapper>
                <Component />
              </PageWrapper>
            }
          />
        ))}
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageWrapper>
              <SingleBlog />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
