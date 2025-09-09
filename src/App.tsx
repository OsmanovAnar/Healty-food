import Footer from './footer/footer'
import Header from './header/header'
import Main from './main/sections/main'

const App = () => {
  return (
    <div className="bg-[#1A1A1A] bg-[url(/placeholder.png)] bg-cover bg-center">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
