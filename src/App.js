import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
