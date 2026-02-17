import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { asset } from "../assets/asset";
import { AppContext } from "../context/AppContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const Navbar = () => {
  const { navigate, setQuery, user, setUser ,axios} = useContext(AppContext);

  const [open, setOpen] = useState(false);        // mobile menu
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);    // profile dropdown

  const handleSearch = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setQuery(input);
      navigate("/AllJobs");
      setInput("");
    }
  };

 const logout = async()=>{
        try{
            const {data} = await axios.post(`${BASE_URL}/auth/logout`);
            if(data.success){
                setUser(false);
                navigate('/');
                toast.success(data.message);
            }
        }
        catch(error){
            toast.error(error.response.data.message);
        }
    }
  return (
    <nav className="w-full bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm h-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={asset.jobofind}
            alt="JoboFind Logo"
            className="h-10 w-auto object-contain scale-125"
          />
        </Link>

        {/* Mobile Right Auth */}
        {user ? (
          <div className="relative sm:hidden">
            <img
              src={asset.createUserIcon}
              alt="user"
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full cursor-pointer border"
            />

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate("/Applications");
                    setIsOpen(false);
                  }}
                >
                  My Applications
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    navigate("/Profile");
                    setIsOpen(false);
                  }}
                >
                  My Profile
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="sm:hidden px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm"
          >
            Login
          </button>
        )}

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/AllJobs" className="hover:text-blue-600">Jobs</Link>

          {/* Search */}
          <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full">
            <input
              type="text"
              placeholder="Search jobs"
              className="py-1.5 w-full bg-transparent outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          {/* Desktop Auth */}
          {user ? (
            <div className="relative">
              <img
                src={`${BASE_URL}/uploads/${user.image}` || asset.createUserIcon}
                alt="user"
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full cursor-pointer border"
              />

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  <p
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/Applications");
                      setIsOpen(false);
                    }}
                  >
                    My Applications
                  </p>
                  <p
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/Profile");
                      setIsOpen(false);
                    }}
                  >
                    My Profile
                  </p>
                  <p
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                    onClick={logout}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-blue-500 hover:bg-indigo-600 text-white rounded-full"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/AllJobs">Jobs</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
