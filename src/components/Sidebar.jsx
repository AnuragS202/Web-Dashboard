import { useState } from "react";
import {
  Home,
  BarChart2,
  Wallet,
  ListCheck,
  Store,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import "tailwindcss/tailwind.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-20 md:hidden text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>
      <aside
        className={`fixed top-0 left-0 h-screen w-16 bg-gray-800 p-8 z-10 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <nav className="flex flex-col h-full justify-between items-center space-y-8">
          <div className="space-y-8">
            <div>
              <div className="w-8 h-8 bg-blue-500 rounded-lg grid grid-cols-2 gap-1 p-1">
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
                <div className="bg-white rounded-sm"></div>
              </div>
            </div>

            <Home className="w-6 h-6 text-blue-500" />
            <BarChart2 className="w-6 h-6 text-gray-400" />
            <Wallet className="w-6 h-6 text-gray-400" />
            <ListCheck className="w-6 h-6 text-gray-400" />
            <Store className="w-6 h-6 text-gray-400" />
          </div>
          <LogOut className="w-6 h-6 text-gray-400" />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
