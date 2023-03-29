export const Backdrop = ({
  show = false,
  onClick,
  children
}) => {

  return (
    <div className={`
      backdrop
      absolute
      flex
      w-full h-full
      bg-[rgba(0,0,0,0.6)]

      ${ show ? "z-[8]" : "z-[-1]" } 
      ${ show ? "opacity-100" : "opacity-0" } 
      ${ onClick ? "cursor-pointer" : '' }
    `}
     onClick={ onClick }>
      { children }
    </div>
  );
}

export default Backdrop;
