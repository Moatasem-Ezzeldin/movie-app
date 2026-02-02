

const OverlayHeader = ({ open }) => {
  return (
    <div className={`absolute top-[2.8rem] left-0 right-0 bottom-0 bg-transparent backdrop-blur-[1.3px] z-40 md:hidden
        transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 hidden"}`} 
    />
  )
}

export default OverlayHeader