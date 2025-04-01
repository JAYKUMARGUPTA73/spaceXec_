import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface Notification {
  _id: string;
  notifications_title: string;
  created_at: string;
}

interface NotificationWithRead {
  notification: Notification;
  read: boolean;
}

interface NotificationModalProps {
  notifications: NotificationWithRead[];
  closeModal: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  notifications,
  closeModal,
}) => {
  const sortedNotifications = notifications.sort((a, b) => {
    return a.read === b.read
      ? new Date(b.notification.created_at).getTime() -
          new Date(a.notification.created_at).getTime()
      : a.read
      ? 1
      : -1;
  });

  const unreadNotifications = sortedNotifications.filter(
    (notification) => !notification.read
  );
  const readNotifications = sortedNotifications.filter(
    (notification) => notification.read
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <FaBell className="mr-3 text-yellow-500" /> Notifications
          </h2>
          <button 
            onClick={closeModal} 
            className="text-gray-600 hover:text-gray-900"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[60vh] p-4">
          {unreadNotifications.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Unread
              </h3>
              {unreadNotifications.map((notification) => (
                <Link
                  key={notification.notification._id}
                  to={`/notifications/${notification.notification._id}`}
                  onClick={closeModal}
                  className="block"
                >
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-800 font-medium">
                      {notification.notification.notifications_title}
                    </p>
                    <span className="text-xs text-gray-500">
                      {new Date(
                        notification.notification.created_at
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {readNotifications.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Read
              </h3>
              {readNotifications.map((notification) => (
                <Link
                  key={notification.notification._id}
                  to={`/notifications/${notification.notification._id}`}
                  onClick={closeModal}
                  className="block"
                >
                  <div className="bg-gray-100 p-3 rounded-lg mb-2">
                    <p className="text-sm text-gray-700">
                      {notification.notification.notifications_title}
                    </p>
                    <span className="text-xs text-gray-500">
                      {new Date(
                        notification.notification.created_at
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {unreadNotifications.length === 0 &&
            readNotifications.length === 0 && (
              <p className="text-sm text-gray-500 text-center">
                No notifications available
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [userId, setUserId] = useState("");
  const [notifications, setNotifications] = useState<NotificationWithRead[]>([]);
  const [newNotificationCount, setNewNotificationCount] = useState(0);

  // Fetch notifications and user data
  useEffect(() => {
    const fetchUserData = async () => {
      const storedId = localStorage.getItem("_id");
      const storedName = localStorage.getItem("name");
      const storedProfilePic = localStorage.getItem("profile_pic");

      if (storedId) {
        setUserId(storedId);
        setUsername(storedName || "");
        setProfilePic(storedProfilePic || "");
        
        try {
          const response = await fetch(
            `http://localhost:5000/api/users/notifications/${storedId}`
          );
          if (!response.ok) throw new Error("Failed to fetch notifications");
          
          const data = await response.json();
          setNotifications(data.notifications);
          setNewNotificationCount(data.unreadCount);
        } catch (error) {
          console.error("Notification fetch error:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      const baseUrl = process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_BACKEND_URL
        : "http://localhost:5000";
      
      const response = await fetch(`${baseUrl}/api/users/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        localStorage.clear();
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render mobile menu
  const renderMobileMenu = () => (
    <div 
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        bg-white w-full h-full overflow-y-auto`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>
        <button onClick={toggleMobileMenu} className="text-gray-600">
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex flex-col p-4 space-y-4">
        <Link 
          to="/properties" 
          className="text-lg text-gray-800 hover:text-yellow-500 py-2"
          onClick={toggleMobileMenu}
        >
          Properties
        </Link>
        <Link 
          to="/contact" 
          className="text-lg text-gray-800 hover:text-yellow-500 py-2"
          onClick={toggleMobileMenu}
        >
          Contact Us
        </Link>
        <Link 
          to="/about" 
          className="text-lg text-gray-800 hover:text-yellow-500 py-2"
          onClick={toggleMobileMenu}
        >
          About Us
        </Link>
      </div>
    </div>
  );

  // Render profile dropdown
  const renderProfileMenu = () => (
    <div className={`absolute z-50 right-0 top-full w-64 bg-white shadow-lg rounded-lg mt-2 overflow-hidden 
      ${isProfileMenuOpen ? 'block' : 'hidden'}`}>
      <div className="p-4 border-b flex items-center">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="w-12 h-12 rounded-full mr-3 object-cover" 
        />
        <div>
          <p className="font-semibold text-gray-800">{username}</p>
          <p className="text-sm text-gray-500">View Profile</p>
        </div>
      </div>
      <div className="py-1">
        <Link 
          to={`/myprofile/${userId}`} 
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          onClick={() => setIsProfileMenuOpen(false)}
        >
          <FaUser className="mr-3" /> My Profile
        </Link>
        <Link 
          to="/settings" 
          className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
          onClick={() => setIsProfileMenuOpen(false)}
        >
          <FaCog className="mr-3" /> Settings
        </Link>
        <button 
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100 text-left"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/properties" className="text-gray-800 hover:text-yellow-500">Properties</Link>
          <Link to="/contact" className="text-gray-800 hover:text-yellow-500">Contact Us</Link>
          <Link to="/about" className="text-gray-800 hover:text-yellow-500">About Us</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsNotificationModalOpen(true)} 
            className="mr-4 relative"
          >
            <FaBell className="w-6 h-6 text-gray-600" />
            {newNotificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 
                flex items-center justify-center text-xs">
                {newNotificationCount}
              </span>
            )}
          </button>
          <button onClick={toggleMobileMenu} className="text-gray-600">
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop User Section */}
        <div className="hidden md:flex items-center">
          {!userId ? (
            <Link 
              to="/login" 
              className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <div 
                className="flex items-center cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <div className="relative mr-4">
                  <FaBell 
                    className={`w-6 h-6 ${newNotificationCount > 0 ? 'text-yellow-500' : 'text-gray-600'}`}
                    onClick={() => setIsNotificationModalOpen(true)}
                  />
                  {newNotificationCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 
                      flex items-center justify-center text-xs">
                      {newNotificationCount}
                    </span>
                  )}
                </div>
                <img 
                  src={profilePic} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover" 
                />
              </div>
              {renderProfileMenu()}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {renderMobileMenu()}

      {/* Notification Modal */}
      {isNotificationModalOpen && (
        <NotificationModal 
          notifications={notifications} 
          closeModal={() => setIsNotificationModalOpen(false)} 
        />
      )}
    </nav>
  );
};

export default Navbar;