import { Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import AuthLayout from "./pages/Auth/Auth";

const App: React.FC = () => {
    return (
        <main>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/auth/registration" element={<Registration />}/>
                    <Route path="/auth/login" element={<Login />}/>
                </Route>
            </Routes>
        </main>
    )
}

export default App;