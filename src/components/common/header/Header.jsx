import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import OverlayHeader from "./OverlayHeader";
import { useState, useEffect, useRef, useCallback } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);  
  const role = "guest"; 
  const menuRef = useRef(null);

  //  Callback لإغلاق القائمة
  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen(prev => !prev), []);

  //  إغلاق القائمة عند الضغط خارجها أو Scroll أو تغيير حجم الشاشة
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleScroll = () => closeMenu();

    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu(); // md breakpoint
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);
  return (
    <>
        <header className='sticky top-0 z-50 p-2 md:p-4 bg-surface border-b border-b-border flex justify-between items-center'>
            <Logo role = { role } />
            <DesktopMenu role = { role } />
            <HamburgerButton 
                open = { open } 
                toggleMenu = { toggleMenu }
            />
            <MobileMenu 
                menuRef = { menuRef }
                role = { role }
                open = { open } 
                closeMenu = {closeMenu}
                
            />
        </header>
        <OverlayHeader open={open} />
    </>
  )
}

export default Header