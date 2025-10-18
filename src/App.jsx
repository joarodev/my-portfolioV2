import MyRoutes from "./router";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  return (
    <>
      {/* Pantalla de carga */}
      <LoadingScreen/>

      {/* Contenido App */}
      <MyRoutes />
    </>
  );
}

export default App;
