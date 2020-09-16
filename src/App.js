import React from 'react';
import NavbarComponent from './Component/Fungsional/NavbarComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Component/Fungsional/Homepage';
import About from './Component/Fungsional/About';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';



// import logo from './logo.svg';
// import Parent from './Component/Class/Parent';
// import BootstrapComp from './Component/Class/BootstrapComp';


// import Home from './Component/Fungsional/Home';
// import Beranda from './Component/Class/Beranda';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <Home/> */}
//       {/* <Parent/> */}
//       {/* <BootstrapComp /> */}
//       <NavbarComponent/>
//     </div>
//   );
// }

const App = () => {
  return(
    <BrowserRouter>
      <NavbarComponent/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/about" component={About}/>
        {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
        <Route exact path="/mahasiswa" component={ListComp}/>
        <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
        <Route exact path="/mahasiswa/edit" component={EditComp}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
