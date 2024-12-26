import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

interface NavbarProps {
  navOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    activeBox.current!.style.top = lastActiveLink.current!.offsetTop + "px";
    activeBox.current!.style.height =
      lastActiveLink.current!.offsetHeight + "px";
    activeBox.current!.style.left = lastActiveLink.current!.offsetLeft + "px";
    activeBox.current!.style.width = lastActiveLink.current!.offsetWidth + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove("active");
    const target = event.target as HTMLAnchorElement; // Cast to HTMLAnchorElement
    target.classList.add("active");
    lastActiveLink.current = target;

    activeBox.current!.style.top = lastActiveLink.current!.offsetTop + "px";
    activeBox.current!.style.height =
      lastActiveLink.current!.offsetHeight + "px";
    activeBox.current!.style.left = lastActiveLink.current!.offsetLeft + "px";
    activeBox.current!.style.width = lastActiveLink.current!.offsetWidth + "px";
  }
  

  const navItems = [
    {
      label: "Home",
      path: "#home",
      className: "nav-link active",
      ref: lastActiveLink
    },
    {
      label: "About",
      path: "#about",
      className: "nav-link"
    },
    {
      label: "Work",
      path: "#work",
      className: "nav-link"
    },
    {
      label: "Reviews",
      path: "#reviews",
      className: "nav-link"
    },
    {
      label: "Contact",
      path: "#contact",
      className: "nav-link md:hidden"
    }
  ];
  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, path, className, ref }, key) =>
        <a href={path} key={key} ref={ref} className={className} onClick={(e) => activeCurrentLink(e)}>
          {label}
        </a>
      )}
      <div className="active-box" ref={activeBox} />
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
