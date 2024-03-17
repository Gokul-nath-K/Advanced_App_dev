import { NavLink } from "react-router-dom";

function Topbar() {
  const pages = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Events",
      path: "/event",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Login",
      path: "/login",
    },
  ];
  return (
    <>
      <nav className="bg-gray-800 w-full text-white mx-auto max-w-screen p-1 md:flex md:items-center md:justify-between absolute z-50">
        <div className="flex flex-row items-start justify-start font-bold">
          <span className=""> Event </span>
        </div>
        <ul className="flex flex-wrap items-center font-bold py-4">
          {pages &&
            pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  to={page.path}
                  className="py-2 px-5 hover:bg-gray-100 border-b-2 border-transparent sticky"
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}

export default Topbar;
