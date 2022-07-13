import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, shopInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { Navigate} from "react-router-dom";
import { productsColumns, shopsColumns, userColumns } from "./datatablesource";
import NewShop from "./pages/new Shop/NewShop";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({children}) => {
    const {user}= useContext(AuthContext)
    if (!user){
      return <Navigate to="/login" />


    }
    return children;

  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<ProtectedRoute>
              <Home />
              </ProtectedRoute>} />
            
            <Route path="users">
              <Route index element={<ProtectedRoute>
              <List columns={userColumns} />
              </ProtectedRoute>} />
              <Route path=":userId" element={<ProtectedRoute>
              <Single />
              </ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute>
                  <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>}
              />
            </Route>
            <Route path="shops">
              <Route index element={<ProtectedRoute> <List columns = {shopsColumns} /> </ProtectedRoute>} />
              <Route path=":shopsId" element={<ProtectedRoute>
              <Single />
              </ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute> 
                  <NewShop inputs={shopInputs} title="Add New Shop" />
                  </ProtectedRoute>}
              />
            </Route>

            <Route path = "products">
              <Route index element = {<ProtectedRoute> <List columns={productsColumns} /> </ProtectedRoute>} />
              <Route path = ":productId" element = {<ProtectedRoute>
                  <Single />
                  </ProtectedRoute>} />
              <Route 
              path="new"
              element = {<ProtectedRoute>
                <NewShop inputs = {productInputs} title = "Add New Product" />

              </ProtectedRoute>}
              />
              
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
