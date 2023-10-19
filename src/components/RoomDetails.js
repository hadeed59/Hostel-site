import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { getSingleRoom } from "./apiCalls";

const RoomDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const room = useSelector((state) => state.Rooms.singleRoom);

  const params = useParams();
  const roomId = parseInt(params.id);

  useEffect(() => {
    const getSingleRoomData = (id) => {
      getSingleRoom(id);
    };
    getSingleRoomData(roomId);
  }, [roomId]);

  if (!room) {
    return (
      <div className="text-center text-xl text-slate-400 mt-4">
        Room Booked.
      </div>
    );
  }

  let subtitle;

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-slate-300 h-[100vh]">
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
      <div className="bg-slate-300 rounded-md  p-4">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-96 object-contain rounded-md"
        />
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{room.title}</h2>
          <p className="mt-2 text-gray-600">{room.description}</p>
          <div className="mt-4 flex justify-center">
            {" "}
            <span className="text-lg font-medium text-slate-900 text-center">
              {room.price + `/only`}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <div className="text-center">
              {" "}
              <ul className="list-disc list-inside">
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          to="/Rooms"
          className="bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300 mr-4"
        >
          Back to Rooms
        </Link>
        <button
          onClick={openModal}
          className="bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300"
        >
          Book Now
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="flex items-center justify-center"
          contentLabel="Booking Modal"
        >
          <div className="bg-white rounded-md p-8 shadow-md">
            <div className="flex justify-between items-center">
              <img
                src="/lo.png"
                alt="Logo"
                style={{ height: "50px", width: "80px" }}
              />
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Booking Details
              </h2>
              <button
                className="bg-slate-500 text-white px-2 py-1.5 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300 "
                onClick={closeModal}
              >
                Back to Rooms
              </button>
            </div>
            <form className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bookingDate"
                  className="block text-gray-700 font-medium"
                >
                  Starting Date:
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bookingDate"
                  className="block text-gray-700 font-medium"
                >
                  Ending Date:
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  className="mt-1 p-2 border rounded-md w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-slate-500 text-white px-6 py-3 rounded-md shadow-md hover:text-black hover:bg-transparent hover:border-slate-500 border-2 border-solid transition-all duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </Modal>
      </div>
      <Footer />
    </div>
  );
};

export default RoomDetails;
