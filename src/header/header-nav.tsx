

const HeaderNav = () => {
  return (
    <nav className="w-[77%] h-[90px] flex justify-between items-center">
        <a href="#"><img className="w-[207px]" src="./public/logo.png" alt="Logo" /></a>

        <ul className="w-[303px] flex justify-between" >
            <li className="hover:text-[#34C759] text-[14px]"><a href="#">Menu</a></li>
            <li className="hover:text-[#34C759] text-[14px]"><a href="#">Recipes</a></li>
            <li className="hover:text-[#34C759] text-[14px]"><a href="#">Chefs</a></li>
            <li className="hover:text-[#34C759] text-[14px]"><a href="#">Contacts </a></li>
        </ul>
    </nav>
  )
}

export default HeaderNav