import { Button } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Private from "./Layout/Private/Private";
import Home from "./Pages/Home";
import Public from "./Layout/Public";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/" element={<Public />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Route>
        <Route  path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
