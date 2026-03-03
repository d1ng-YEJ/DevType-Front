import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Type from "./pages/Type";
import Top from "./components/Top";
import Copyright from "./components/Copyright";
function Layout() {
  return (
    <div className="flex flex-col bg-navy min-h-screen">
      <Top></Top>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Copyright></Copyright>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Start></Start>}></Route>

      <Route element={<Layout></Layout>}>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/type" element={<Type></Type>}></Route>
      </Route>
    </Routes>
  );
}
export default App;
