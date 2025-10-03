import Footer from './footer/footer'
import Header from './header/header'
import Main from './main/main'

const App = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#1A1A1A] bg-cover bg-center">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
