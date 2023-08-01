import React from "react";
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

const AboutPage = () => {
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
          <Link className="hover:text-slate-300" to="/about">
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
              <h1 className="text-4xl font-sans">
                Providing you the best rooms in town
              </h1>
              <h2 className="mt-4 text-lg italic font-medium">
                "Hostel life is all about the journey, not the destination. "
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

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-medium  mb-8 text-slate-800">
                About Us
              </h2>
              <p className="text-gray-700  mb-8">
                Welcome to NY Hostels, your home away from home in the heart of
                the bustling city of New York. Our hostel offers a warm and
                inviting atmosphere, making it the perfect choice for travelers
                and backpackers seeking a comfortable and affordable stay. Our
                dedicated and friendly staff are always ready to welcome you
                with a smile and ensure that you have a memorable stay. With our
                prime location, you'll have easy access to all the major
                attractions, shopping districts, and entertainment spots that
                New York City has to offer. At NY Hostels, we prioritize the
                comfort and safety of our guests. Our rooms are well-maintained
                and equipped with modern amenities to ensure a pleasant stay.
                Whether you're traveling solo or with a group, we have various
                room options to cater to your needs. We take pride in providing
                top-notch services, including free Wi-Fi, free parking, and a
                swimming pool to relax and unwind after a day of exploration.
                Our mess offers delicious meals prepared with love, and our
                cleaning service ensures a hygienic environment. Your security
                is our priority, and we have round-the-clock surveillance and
                friendly security personnel to ensure your peace of mind during
                your stay. If you have any questions or need assistance, our
                complaint service is readily available to address any concerns
                promptly!
              </p>
            </div>

            <div className="h-96 rounded-md overflow-hidden">
              <img
                src="/bedroom.jpg"
                alt="Bedroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8 mt-16 text-center">
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
              Explore
              <Link className="text-blue-500 pl-2 hover:underline" to="/Rooms">
                Rooms Now{"->"}
              </Link>
            </p>
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
