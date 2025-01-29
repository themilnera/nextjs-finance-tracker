import Image from "next/image";
import { ImStatsBars } from 'react-icons/im'


const Nav = () => {
  return (
    <header className="format">
      <div className="flex items-center justify-between">
        {/* User Information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="http://thispersondoesnotexist.com/"
              alt="profile image"
            />
          </div>
          {/* name */}
          <small>Hello, name</small>
        </div>
        <nav className="flex items-center gap-4">
          {/* Right side of the navigation */}
          <div>
            <ImStatsBars className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Log Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
