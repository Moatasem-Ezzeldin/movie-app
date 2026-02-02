import React from 'react'

const HamburgerButton = ( { open, toggleMenu } ) => {

  return (
    <button
      onClick={ toggleMenu }
      className={`md:hidden cursor-pointer w-7 h-7 flex items-center justify-center relative
        transition-colors duration-500 ${open ? "text-red-500 pointer-events-none cursor-pointer" : "text-subtitle hover:text-title"}`}
    >
      {/* خط علوي */}
      <span
        className={`absolute w-5 h-0.5 bg-current transition-transform duration-300 ${
          open ? "rotate-45 top-1/2 -translate-y-1/2" : " -translate-y-1.5"
        }`}
      />
      {/* خط وسط */}
      <span
        className={`absolute w-5 h-0.5 bg-current transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* خط سفلي */}
      <span
        className={`absolute w-5 h-0.5 bg-current transition-transform duration-300 ${
          open ? "-rotate-45 top-1/2 -translate-y-1/2" : " translate-y-1.5"
        }`}
      />
    </button>
  )
}

export default HamburgerButton