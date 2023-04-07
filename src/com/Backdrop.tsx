export const Backdrop = ({
  show = false,
  onClose = null,
  children
}) => {

  return (
    <div className={`
      backdrop
      absolute
      flex flex-col
      overflow-auto
      w-screen h-screen
      bg-[rgba(0,0,0,0.6)]

      ${ show ? "z-[100]" : "z-[-1]" } 
      ${ show ? "opacity-100" : "opacity-0" } 
      ${ onClose ? "cursor-pointer" : '' }
    `}
     onClick={ onClose }>
      { children }
    </div>
  );
}

export default Backdrop;
