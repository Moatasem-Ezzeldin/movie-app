import { NavLink } from "react-router-dom"
import { navByRole } from '../../../config/navLinks.convig';

const Footer = () => {
  const role = "guest";
  const links = navByRole[role];

  return (
    <footer className="p-2 md:p-4 bg-surface border-t border-t-border">
      <div className="pb-2 md-pb-4 grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">  
        {/* ===== Left ===== */}
        <div>
          <h2 className="text-md text-primary font-bold md:text-xl md:font-extrabold">
            MovieApp
          </h2>
          <p className="text-sm text-subtitle leading-relaxed max-w-2xs">
            Discover and enjoy your favorite movies in one place.
          </p>
        </div>
        {/* ===== Middle (Links) ===== */}
        <div>
          <h3 className="text-sm text-title font-bold md:text-lg md:font-extrabold">Quick Links</h3>
          <ul className="flex flex-wrap gap-2 ">
            {links.map((link) => (
              <li key = { link.id }>
                  <NavLink to = { link.path }
                    className={({ isActive }) => `cursor-pointer text-xs sm:text-sm ${isActive ? "text-primary font-semibold" 
                    : "transition-colors duration-300 text-subtitle font-medium hover:text-title "}
                    `
                    }
                  >
                      { link.label }
                  </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* ===== Right ===== */}
        <div className="">
          <h3 className="text-sm text-title font-bold md:text-lg md:font-extrabold">About</h3>
          <p className="text-sm text-subtitle">
            Designed & Developed by
          </p>
          <p className="text-sm font-bold text-title">
            Moatasem Ezz Eldin
          </p>

        </div>
      </div>
      <div className="border-t border-t-border pt-2 md:pt-4 text-center">
        <p className="text-sm md:text-md text-subtitle">
            © {new Date().getFullYear()} All rights reserved
          </p>
      </div>
    </footer>
  )
}
export default  Footer;