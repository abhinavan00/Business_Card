import Header from "./components/header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/footer/Footer.jsx"
import './App.css'

export default function App() {
  return(
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}