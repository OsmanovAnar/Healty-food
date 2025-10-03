import Footer from './footer/footer'
import Header from './header/header'
import Main from './main/main'

const App = () => {
  return (
    <div className="h-full w-full bg-[#1A1A1A] bg-cover bg-center overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
