    import { BrowserRouter, Routes, Route } from "react-router-dom"


    import Home from './pages/Home'
    import Shop from './pages/Shop'
    import AdminPortal from './pages/AdminPortal'
    import About from './pages/About'
    import Contact from './pages/Contact'
    import EditForm from './pages/EditForm'
    import { ProductProvider } from "./contexts/ProductContext"

export default function App() {

    return (
    <BrowserRouter>
    <ProductProvider>
    <Routes>
      <Route path='/' element = {<Home />} >
        <Route path='Contact' element = {<Contact />} />
        <Route path='/About' element = {<About />} />   
      </Route>
      <Route path='/Shop' element = {<Shop />}>
      <Route path='Contact' element = {<Contact />}/>     
      </Route>
      <Route path='/AdminPortal' element = {<AdminPortal />} >
      <Route path='Contact' element = {<Contact />} />
      </Route>
      <Route path=':id' element = {<EditForm />}/>
    </Routes>
    </ProductProvider>
    </BrowserRouter>
    )
}