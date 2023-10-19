import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaBroom,
  FaTshirt,
  FaShieldAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import { getHostelRooms } from "./apiCalls";
import { useSelector } from "react-redux";

const HomePage = () => {
  const hostelRoomsData = useSelector((state) => state.Rooms.rooms);
  useEffect(() => {
    getHostelRooms();
  }, []);
  return (
    <div>
      <nav className="bg-slate-700 py-4 px-8 flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link to="/">
            <img
              src="/lo.png"
              alt="Logo"
              style={{ height: "50px", width: "80px" }}
            />
          </Link>
        </div>
        <div className="flex space-x-4 text-white">
          <Link className="hover:text-slate-300" to="/">
            Home
          </Link>

          <Link className="hover:text-slate-300" to="/Rooms">
            Rooms
          </Link>
          <Link className="hover:text-slate-300" to="/About">
            About
          </Link>
        </div>
      </nav>
      <section
        className="relative py-40 text-white"
        style={{
          backgroundImage: "url(/hostel.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative max-w-lg">
          <div className=" backdrop-blur-sm bg-black-50/30 rounded-md p-8 shadow-lg">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-sans">Welcome to NY Hostels</h1>
              <h2 className="mt-4 text-lg italic font-light">
                "Your Home Away From Home"
              </h2>
              <Link to="/rooms">
                <button className="mt-8 bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300">
                  Explore Rooms
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Main Features
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaWifi size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Free Wi-Fi</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaParking size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Free Parking</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaSwimmingPool size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Swimming Pool</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaUtensils size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Mess</span>
            </div>

            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaBroom size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Cleaning Service</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaTshirt size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Laundry</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaShieldAlt size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Security</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-md mb-4">
              <FaExclamationCircle size={32} className="text-slate-400 mr-2" />
              <span className="text-lg font-semibold">Complaint Service</span>
            </div>
          </div>
          <span>
            <p className="text-center text-lg text-black pt-3">
              Know more
              <Link className="text-blue-500 pl-2 hover:underline" to="/About">
                About us {"->"}
              </Link>
            </p>
          </span>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center ">
            Featured Rooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hostelRoomsData
              ? hostelRoomsData.map((hostelRoom) => (
                  <div className="bg-white rounded-md shadow-md overflow-hidden">
                    <img
                      src={hostelRoom.image}
                      alt="Room"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {hostelRoom.title}
                      </h3>
                      <p className="text-gray-600">
                        {hostelRoom.price} / Monthly
                      </p>
                      <Link to={`/Rooms`}>
                        <button className="mt-8 bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300">
                          Explore Rooms
                        </button>
                      </Link>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
