const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        <h1 className="">
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Anthony Favoroso"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button className="material-icons-round menu-btn md:hidden">
            <span className="material-icons">menu</span>
          </button>
          Navbar
        </div>

        <a href="#contact" className=" text-right">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
