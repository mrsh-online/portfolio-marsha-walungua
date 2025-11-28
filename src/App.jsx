import "./App.sass"
import {useState} from "react"
import Header from "./Components/Header.jsx"
import Home from "./Components/Pages/Home.jsx"
import Work from "./Components/Pages/Work/Work.jsx"
import Contacts from "./Components/Pages/Contacts/Contacts.jsx"
import Background from "./Components/Background/Background.jsx"
import Certifications from "./Components/Pages/Certifications/Certifications.jsx"
import Competence from "./Components/Pages/Competences/Competences.jsx"
import CV from "./Components/Pages/CV/CV.jsx"
import Projets from "./Components/Pages/Projets/Projet.jsx"
import Footer from "./Components/Footer.jsx"
import {BrowserRouter, Routes, Route} from "react-router"

function App() {
  const [lang, setLang] = useState("fr")

  return (
    <main>
        <div className="background">
            <Background />
        </div>
        <Header setLang={setLang}/>
        <div className="underHeaderLine"></div>
        <Home lang={lang}/>
        <Work lang={lang}/>
        <Projets lang={lang}/>
        <Competence />
        <CV lang={lang}/>
        <Contacts lang={lang}/>
        <Footer/>
    </main>
  )
}

export default App 
