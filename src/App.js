import {useState, createContext} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login,Register,Home,Tambah,Account,Userlist,Template } from './page'

export const AppContext = createContext(null)

function App() {
  const [user,setUser] = useState(null)
  return (
    <AppContext.Provider value={{user, setUser}}>
  
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/tambah" element={<Tambah />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/userlist" element={<Userlist />} />
            <Route exact path="/template" element={<Template />} />
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
