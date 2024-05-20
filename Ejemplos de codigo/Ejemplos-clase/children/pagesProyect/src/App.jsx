import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Configuration from "./pages/Configuration";
import Task from "./pages/Task";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Configuration />} path="/configuration" exact />
        <Route element={<Profile />} path="/profile" exact />
        <Route element={<Task />} path="/tasks/:id" exact />
        <Route element={<Home />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
}
