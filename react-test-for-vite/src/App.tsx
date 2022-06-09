import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/molecules/Home";
import Register from "./components/molecules/Register";
import Login from "./components/molecules/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
