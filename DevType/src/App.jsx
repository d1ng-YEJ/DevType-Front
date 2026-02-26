import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Start></Start>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>
  );
}
export default App;
