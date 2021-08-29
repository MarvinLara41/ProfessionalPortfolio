import AboutMe from "./Screens/AboutMe";
import LandingScreen from "./Screens/Landing";
import Projects from "./Screens/Project";

function App() {
  return (
    <div className="grid-container ">
      <main>
        <LandingScreen></LandingScreen>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
