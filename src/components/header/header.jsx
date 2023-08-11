import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-opacity-70 bg-black  sticky top-0 py-5 text-white">
        <nav className="w-3/4 flex flex-row mx-auto ">
          <div className="italic uppercase text-lg basis-1/4">
            <Link to="/">
              <span className="font-extrabold text-white">Benua </span>
              <span className="font-extrabold text-white">Puhun</span>
            </Link>
          </div>

          <div className="italic basis-3/4 flex items-center justify-evenly">
            <Link className="hover:underline" to="/visi-misi">
              visi & misi
            </Link>
            <Link className="hover:underline" to="/structure">
              struktur
            </Link>
            <Link className="hover:underline" to="/gallery">
              gallery
            </Link>
            <Link className="hover:underline" to="/sembako">
              sembako
            </Link>
            <Link className="hover:underline" to="/about">
              about
            </Link>
            <Link className="hover:underline" to="/contact">
              contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
