import { BrowserRouter, Routes, Router, Route, Redirect } from 'react-router-dom';
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import Dashboard from './component/Dashboard';
import Body from './resume_components/Body/Body'
import OurTeam from './component/OuerTeam';
import Login from './SiginUp_SiginIn/Container/Login'
import Register from './SiginUp_SiginIn/Container/Register'
import PageNotFound from './component/PageNotFound';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/dashboard' element={<Dashboard />} ></Route>
                <Route path='/body' element={<Body />}></Route>
            <Route path='/ourteam' element={<OurTeam />}></Route>
            <Route path='/pagenotfound' element={<PageNotFound />}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App;