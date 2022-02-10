import { FaFire, FaPoo, FaSun, FaMoon } from "react-icons/fa";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import useDarkMode from "./hooks/useDarkMode";

function SideBar() {
  const [darkMode, setDarkMode] = useDarkMode();
  const darkModeHandler = () => setDarkMode(!darkMode);

  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="28" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
      <SideBarIcon icon={<BsGearFill size="28" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon click={darkModeHandler} icon={darkMode ? <FaSun size="28" /> : <FaMoon size="28"/>} />
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip 💡", click }) => (
  <div onClick={click} className="sidebar-icon dark:hover:bg-green-600 dark:hover:text-gray-800 group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
