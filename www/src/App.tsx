import { Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import AuthLayout from "./pages/Auth/Auth";
import { AuthContextProvider } from "./context/authContext";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
    return (
        <AuthContextProvider>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}>

                    </Route>
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