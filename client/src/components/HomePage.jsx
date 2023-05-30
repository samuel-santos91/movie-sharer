import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-cover">
      <p className="text-4xl relative top-7 font-limelight text-white">DISCOVER THE BEST MOVIES TO WATCH </p>
      <div className="relative top-32">
        <Link to="/add">
          <button className="btn-main">Add Movie</button>
        </Link>
        <Link to="/browse">
          <button className="btn-main">Browse Movies</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
