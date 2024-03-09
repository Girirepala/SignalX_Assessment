import "./App.css";
import NotFound from "./Components/NotFound";
import Product from "./Components/Product";
import Task from "./Components/Task";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
