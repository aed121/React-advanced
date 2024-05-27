import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import StudentPage from "./pages/StudentPage";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
