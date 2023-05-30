import { Link } from "react-router-dom";
import { FcClapperboard } from "react-icons/fc";

const NavBar = () => {
  return (
    <nav className="z-10 flex justify-between items-center bg-blue-950 fixed top-0 left-0 w-screen h-12 text-white font-limelight">
      <div>
        <Link to="/">
          <FcClapperboard className="ml-2" size={30} />
        </Link>
      </div>
      <ul className="flex">
        <li className="mx-3 hover:text-blue-500">
          <Link to="/add">Add Movie</Link>
        </li>
        <li className="mx-3 hover:text-blue-500">
          <Link to="/browse">Browse Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
