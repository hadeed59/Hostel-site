import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { getHostelRooms } from "./apiCalls";
import { useSelector } from "react-redux";

const Rooms = () => {
  const hostelRoomsData = useSelector((state) => state.Rooms.rooms);
  useEffect(() => {
    const getHostelsData = async () => {
      await getHostelRooms();
    };
    getHostelsData();
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
              <h1 className="text-4xl font-sans">Explore Our Rooms</h1>
              <p className="mt-4 text-lg italic font-light">
                Find the perfect room for your stay.
              </p>
              <Link to="/About">
                <button className="mt-8 bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hostelRoomsData
              ? hostelRoomsData.map((room) => (
                  <div
                    key={room.id}
                    className="bg-white rounded-md shadow-md p-4"
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="mt-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {room.title}
                      </h2>
                      <p className="mt-2 text-gray-600">{room.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-lg font-medium text-slate-600">
                          {room.price}
                        </span>
                        <Link
                          to={`/rooms/${room.id}`}
                          className="mt-8 bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300"
                        >
                          View Details
                        </Link>
                      </div>
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

export default Rooms;
