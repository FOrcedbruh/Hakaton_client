import { Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import AuthLayout from "./pages/Auth/Auth";
import { AuthContextProvider } from "./context/authContext";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Layout from "./pages/Layout/Layout";
import Create from "./pages/CreateContacting/Create";
import Recents from "./pages/Recents/Recents";


const App: React.FC = () => {
    return (
        <AuthContextProvider>
            <main>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacting/create" element={<Create />}/>
                        <Route path="/contacting/recents" element={<Recents />}/>
                    </Route>
                    <Route path="/me" element={<Profile />}/>
                    <Route element={<AuthLayout />}>
                        <Route path="/auth/registration" element={<Registration />}/>
                        <Route path="/auth/login" element={<Login />}/>
                    </Route>
                </Routes>
            </main>
        </AuthContextProvider>
    )
}

export default App;