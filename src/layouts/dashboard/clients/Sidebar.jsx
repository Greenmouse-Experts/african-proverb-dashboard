import { NavLink } from "react-router-dom";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { MdDashboard, MdOutlineSettings, MdOutlineNotifications, MdOutlineAnalytics, MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="relative">
      <div
        className={`fixed md:relative top-0 left-0 h-screen bg-[#9E4D02] text-white p-5 flex flex-col transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-72 w-64`}
      >
        {/* User Profile */}
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-8xl md:mt-10 mt-5 mb-2" />
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 space-y-4">
          <SidebarItem to="/clients" icon={<MdDashboard />} text="Dashboard" />
          <DropdownItem
            title="User Management"
            icon={<HiOutlineUsers />}
            isOpen={openDropdown === "userManagement"}
            toggle={() => toggleDropdown("userManagement")}
            items={[
              { to: "/clients/add-students", text: "Add Student" },
              { to: "/clients/manually-register", text: "Manually Register Student" },
            ]}
          />
          <SidebarItem to="/subscription-billing" icon={<MdOutlineSubscriptions />} text="Subscription & Billing" />
          <SidebarItem to="/reports-analytics" icon={<MdOutlineAnalytics />} text="Reports & Analytics" />
          <SidebarItem to="/notifications" icon={<MdOutlineNotifications />} text="Notifications & Messaging" />
          <DropdownItem
            title="Customization & Settings"
            icon={<MdOutlineSettings />}
            isOpen={openDropdown === "settings"}
            toggle={() => toggleDropdown("settings")}
            items={[
              { to: "/corporate-info", text: "Corporate Information" },
              { to: "/corporate-list", text: "Corporate List" },
            ]}
          />
        </nav>

        {/* Setup */}
        <div className="mt-auto space-y-4">
          <div>Setup</div>
          <SidebarItem to="/profile" icon={<FaUserCircle />} text="Profile" />
          <SidebarItem to="/logout" icon={<FaSignOutAlt />} text="Log Out" />
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

const SidebarItem = ({ to, icon, text }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center py-3 px-3 rounded-md cursor-pointer transition-colors ${
        isActive ? "bg-[#5C3711]" : "hover:bg-[#6A3E17]"
      }`
    }
  >
    <span className="mr-3 text-lg">{icon}</span> {text}
  </NavLink>
);

const DropdownItem = ({ title, icon, isOpen, toggle, items }) => (
  <div>
    <button
      onClick={toggle}
      className="flex items-center justify-between w-full py-3 px-3 rounded-md cursor-pointer transition-colors hover:bg-[#BB5D06]"
    >
      <div className="flex items-center">
        <span className="mr-3 text-lg">{icon}</span>
        {title}
      </div>
      <span>{isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
    </button>
    {isOpen && (
      <div className="ml-6 space-y-2">
        {items.map((item) => (
          <SidebarItem key={item.to} to={item.to} icon={null} text={item.text} />
        ))}
      </div>
    )}
  </div>
);

export default Sidebar;
