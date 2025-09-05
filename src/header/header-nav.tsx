const HeaderNav = () => {
  return (
    <nav className="flex h-[90px] w-[77%] items-center justify-between">
      <a href="#">
        <img className="w-[207px]" src="./public/logo.png" alt="Logo" />
      </a>

      <ul className="flex w-[303px] justify-between">
        <li className="text-[14px] hover:text-[#34C759]"><a href="#">Menu</a></li>
        <li className="text-[14px] hover:text-[#34C759]"><a href="#">Recipes</a></li>
        <li className="text-[14px] hover:text-[#34C759]"><a href="#">Chefs</a></li>
        <li className="text-[14px] hover:text-[#34C759]"><a href="#">Contacts </a></li>
      </ul>
    </nav>
  )
}

export default HeaderNav
