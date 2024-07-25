import Index from "./pages/Index.jsx";
import Overview from "./pages/Overview.jsx";
import Moons from "./pages/Moons.jsx";
import Exploration from "./pages/Exploration.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    page: <Index />,
  },
  {
    title: "Overview",
    to: "/overview",
    page: <Overview />,
  },
  {
    title: "Moons",
    to: "/moons",
    page: <Moons />,
  },
  {
    title: "Exploration",
    to: "/exploration",
    page: <Exploration />,
  },
];
