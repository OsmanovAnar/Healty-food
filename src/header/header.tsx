import HeaderNav from './header-nav'

const Header = () => {
  return (
    <header className="fixed z-1000 flex h-[90px] w-full items-center justify-center border-b border-gray-700 backdrop-blur-lg">
      <div className="container mx-auto w-full max-w-[1200px] px-4">
        <HeaderNav />
      </div>
    </header>
  )
}

export default Header
