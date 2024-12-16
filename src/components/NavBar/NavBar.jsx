import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <>
      <div className="flex flex-wrap  h-auto"> {/* place-items-center */}
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                {/* <img class="h-9" src="logo.png" alt="logo"> */}
                PatagoniaExtrem.
              </a>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Patagonia
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Córdoba
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Noroeste
                  </a>
                </li>
              </ul>
              {/* Nav Icons */}
              <div className="hidden xl:flex items-center space-x-5 items-center">

                <div className="flex items-center hover:text-gray-200">
                  <CartWidget />
                </div>
              </div>
            </div>
            {/* Responsive navbar */}
            <div className="xl:hidden flex mr-6 items-center">
              <CartWidget />
            </div>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  )
}

export default NavBar