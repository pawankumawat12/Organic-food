import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

import AppRoutes from "./Routes/AppRoutes";
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;
