import { navByRole } from '../../../config/navLinks.convig';
import { NavLink } from 'react-router-dom';

const MobileMenu = ( { menuRef, role, open, closeMenu } ) => {
  const links = navByRole[role];
  return (
    <div
    ref={ menuRef }
    className={
        `absolute top-[2.8rem] right-0
        w-[90%] max-w-3xs
        bg-surface
        z-50 rounded-l-3xl
        transform transition-transform duration-400
        ${open ? "translate-x-0 " : "translate-x-full"}`
    }
    >
    <ul className=" flex flex-col p-6 gap-4 text-sm font-semibold">
        {
            links.map((link) => (
                <li 
                    key = { link.id }
                    className=''
                >
                    <NavLink
                        to={link.path}
                        onClick={closeMenu}
                        className={({ isActive }) => `
                        block p-4 text-center rounded-2xl cursor-pointer bg-container transition-all duration-300
                        ${isActive ? "text-primary font-bold" : "transition-colors duration-300 text-subtitle font-medium hover:text-title hover:bg-body hover:scale-[1.02]"}
                        `
                        }
                    >
                        {link.label}
                    </NavLink>
                </li>
            ))
        }
    </ul>
    </div>
  );
};

export default MobileMenu;