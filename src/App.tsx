import { LoginComponent } from './components/LoginComponent/LoginComponent'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { MenuComponent } from "./components/menu"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent/>} />
        <Route path="home" element={<MenuComponent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
