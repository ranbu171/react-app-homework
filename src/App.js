import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";



function App() {

  return (
      <Routes>
        <Route
        path="/"
        element={<HomePage />}/>

        <Route
        path="*"
        element={<NotFoundPage />}/>

        <Route
        path="/about"
        element={<AboutUs />}/>

      </Routes>
      
  );
}

export default App;
