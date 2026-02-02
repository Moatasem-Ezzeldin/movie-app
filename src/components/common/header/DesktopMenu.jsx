import { navByRole } from '../../../config/navLinks.convig';
import { NavLink } from 'react-router-dom';

const DesktopMenu = ( { role } ) => {
  const links = navByRole[role];
  return (
    <nav className='hidden md:block'>
        <ul className="flex gap-4">
            {
                links.map((link) => (
                    <li key = { link.id }>
                        <NavLink to = { link.path }
                         className={({ isActive }) => `cursor-pointer ${isActive ? "text-primary font-bold" 
                         : "transition-colors duration-300 text-subtitle font-medium hover:text-title "}
                          `
                         }
                        >
                            { link.label }
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default DesktopMenu