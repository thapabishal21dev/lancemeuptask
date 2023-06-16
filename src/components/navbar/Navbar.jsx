import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-[10px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-[18px]  hover:text-blue-600 rounded md:bg-transparent text-white  md:p-0 "
                >
                  Form
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block py-2 pl-3 pr-4 text-[18px] hover:text-blue-600 rounded md:bg-transparent text-white  md:p-0 "
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
