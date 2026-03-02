import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Type from "./pages/Type";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Start></Start>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/type" element={<Type></Type>}></Route>
    </Routes>
  );
}
export default App;
