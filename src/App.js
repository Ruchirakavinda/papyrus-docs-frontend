import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ResponsiveAppBar from "./common/navBar";
import Dashboard from "./views/dashborad/dashboard";
import Footer from "./common/footer";
import Documemnts from "./views/document/documents";
import Projects from "./views/projects/projects";
import Employees from "./views/employees/employees";
import CreateBusinessLetter from "./views/document/templates/letter/createLetter";
import ViewBusinessLetter from "./views/document/templates/letter/viewLetter";

function App() {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/documents" element={<Documemnts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/business_letter" element={<CreateBusinessLetter />} />
          <Route
            path="/business_letter/preview"
            element={<ViewBusinessLetter />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
