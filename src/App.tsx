import { Outlet } from "react-router-dom";
import { Bg } from "./components/bg";
import { NavBar } from "./components/elements/navbar";
import { Sidebar } from "./components/elements/sidebar";

function App() {
  // const [activePage, setActivePage] = useState("Dashboard");
  return (
    <>
      <div className="flex flex-row w-full h-full font-Poppins">
        <Bg />
        <div className="mx-5 pt-5 flex flex-row gap-4 w-full">
          <Sidebar />
          <div className="flex flex-col text-white w-full">
            <NavBar />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
