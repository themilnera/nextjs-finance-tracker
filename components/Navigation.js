"use client";
import { ImStatsBars } from "react-icons/im";
import { useContext } from "react";
import { authContext } from "@/libs/store/auth-context";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return (
    <header className="format">
      <div className="flex items-center justify-between">
        {/* User Information */}
        {user && !loading && (
          <div className="flex items-center gap-2">
            {/* img */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
            </div>
            {/* name */}
            <small>Hello, {user.displayName}</small>
          </div>
        )}
        {/* Right side of the navigation */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            <div>
              <a href="#stats">
                <ImStatsBars className="text-2xl" />
              </a>
            </div>
            <div>
              <button className="btn btn-danger" onClick={logout}>
                Log Out
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
