import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-700 md:p-8 lg:p-10 text-white">
      <div className="mx-auto max-w-screen-xl text-center ">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-slate-300"
        >
          <img src="/lo.png" alt="Your Logo" className="mr-2 h-8" />
          NY Hostels
        </Link>
        <p className="my-6 text-slate-200 italic">"Your Home Away From Home"</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <Link to="/" className="mr-4 hover:text-red-100 md:mr-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="mr-4 hover:text-red-100 md:mr-6">
              Rooms
            </Link>
          </li>
          <li>
            <Link to="/About" className="mr-4 hover:text-red-100 md:mr-6">
              About Us
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-300 sm:text-center ">
          @{new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="hover:text-slate-200 text-slate-400 underline"
          >
            NY Hostels{" "}
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
