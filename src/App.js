import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Items from './pages/Items';
import AddUser from './pages/AddUser';
import AddItem from './pages/AddItem';
import EditUser from './pages/EditUser';
import EditItem from './pages/EditItem';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/add' element={<AddUser/>}/>
        <Route path='/users/edit/:id' element={<EditUser/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/items/add' element={<AddItem/>}/>
        <Route path='/items/edit/:id' element={<EditItem/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
