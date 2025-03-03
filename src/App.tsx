import NavBar from "./components/NavBar/NavBar.tsx";
import HomeIntro from "./components/HomeIntro/HomeIntro.tsx";

function App() {
  return (
    <>
      <header id="main-header">
        <NavBar />
      </header>

      <main id="main-content">
        <HomeIntro />
      </main>

      <footer id="main-footer"></footer>
    </>
  );
}

export default App;
