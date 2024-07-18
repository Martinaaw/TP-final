
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Products from './Components/pages/Products/Products.jsx'
import { UserContext } from './Components/Context/UserContext.jsx';
import { useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';




function App() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);
return ( 
  <header>
    <h1 onClick={() => navigate("/")} className="logo">Authentication with Firebase</h1>
    {user ? (
      <>
        <p>{JSON.stringify(user)}</p>
      </>

    ) : (

      <p>No hay usuario registrado</p>)}

    <div>
    <Navbar/>
    <Products/>
   </div>
   </header>
   )

}

export default App

   
