import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error404/Error404";
import { Home } from "../pages/Home/Home";

export const AppRouter = () => (
    <Router>
        <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </Router>
)