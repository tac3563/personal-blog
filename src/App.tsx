import NavBar from "./components/NavBar/NavBar.tsx";
import HomeIntro from "./components/HomeIntro/HomeIntro.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HomeIntro />
        <Footer />
      </main>
    </>
  );
}

export default App;
