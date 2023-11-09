
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Edit from './Components/Edit';
import View from './Components/View';
import Add from './Components/Add';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      {/* localhost:3000 */}
      <Route path='' element={<Admin/>} />
       {/* localhost:3000/add */}
       <Route path='add' element={<Add/>}/>
        {/* localhost:3000/view/1 */}
        <Route path='view/:id' element={<View/>}/>
        {/* localhost:3000/view/1 */}
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
