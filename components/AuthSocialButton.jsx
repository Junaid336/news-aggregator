const AuthSocialButton = ({ Icon, onClick }) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        px-4 
        py-2 
        text-gray-500 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        hover:bg-gray-50 
        focus:ring-2 
        focus:ring-inset 
        focus:ring-gray-600 
        hover:ring-2 
        hover:ring-inset 
        hover:ring-gray-600 
        focus:outline-offset-0
      "
    >
      <Icon size="1.5em" />
    </button>
   )
}
 
export default AuthSocialButton;