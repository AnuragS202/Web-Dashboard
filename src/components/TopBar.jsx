import { Search, Bell, Settings, User } from "lucide-react";

const TopBar = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-gray-900">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white mr-4">Dashboard</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Bell className="w-6 h-6 text-gray-400" />
        <Settings className="w-6 h-6 text-gray-400" />
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
