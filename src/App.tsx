import { useState } from "react";
import { Bg } from "./components/bg";
import { Sidebar } from "./components/sidebar";
import { NavBar } from "./components/navBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { TablePage } from "./pages/tables";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  console.log(activePage);
  return (
    <>
      <div className="flex flex-row w-full h-full font-Poppins">
        <Bg />
        <div className="mx-5 pt-5 flex flex-row gap-4 w-full">
          <Router>
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex flex-col text-white w-full">
              <NavBar page={activePage} />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/table" element={<TablePage />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
