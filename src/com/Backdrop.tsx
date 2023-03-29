export const Backdrop = ({
  show = false,
  onClick,
  children
}) => {

  return (
    <div className={`
      backdrop
      absolute
      flex flex-col
      w-screen h-screen
      bg-[rgba(0,0,0,0.6)]

      ${ show ? "z-[100]" : "z-[-1]" } 
      ${ show ? "opacity-100" : "opacity-0" } 
      ${ onClick ? "cursor-pointer" : '' }
    `}
     onClick={ onClick }>
      { children }
    </div>
  );
}

export default Backdrop;
