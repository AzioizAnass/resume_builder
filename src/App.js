import SignUp from "./components/Authentification/SignUp";
import { Typography} from '@mui/material'
import Navbar from "./components/Layouts/Navbar";
import LandingPage from "./components/Layouts/LandingPage";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from "./components/Layouts/About"
import Contact from "./components/Layouts/Contact";
import Login from "./components/Authentification/Login";
import Form from "./components/Formulaire/Form";
import { UserAuthContextProvider } from "./context/UserContextAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteOut from "./components/ProtectedRouteOut";


import Resume from "./components/Resume/Resume"
import Template1 from "./components/Templates/Template1";
import Resumes from "./components/MyResumes/Resumes";
import Account from "./components/Authentification/Account";


function App() {
  return (
    <>
    <UserAuthContextProvider>
    <Router>
      <Navbar/>
       <Routes >
        <Route  path="/" element={<LandingPage/>} />
        <Route  path="/login" element={<ProtectedRouteOut><Login/></ProtectedRouteOut>} />
        <Route  path="/about" element={ <ProtectedRouteOut><About/></ProtectedRouteOut>} />
        <Route  path="/contact-us" element={<ProtectedRouteOut><Contact/></ProtectedRouteOut>} />
        <Route  path="/signup" element={<ProtectedRouteOut><SignUp/></ProtectedRouteOut>} />
        <Route path="my-resume/:id" element ={<Resume/>}/>
        <Route path="view/:id" element ={<Resume/>}/>


        {/* <Route  path="/myCVs" element={<Template1/>} /> */}

        <Route  path="/resumes" element={
          <ProtectedRoute>
            <Resumes/>
          </ProtectedRoute>} />

        <Route path="/newCV" element={
          <ProtectedRoute>
            <Form/>
          </ProtectedRoute>}
        
         />
         <Route path="/account" element={
          <ProtectedRoute>
            <Account/>
          </ProtectedRoute>}
          />

          
        
         
      </Routes>
      </Router>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
