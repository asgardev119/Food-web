import { Dashboard } from "./pages/Dashboard";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Header from "./componant/Header";
import { Cart } from "./componant/Cart";
import Contact from "./componant/Contact";
import { About } from "./componant/About";
import { RestaurentMenu } from "./componant/RestaurentMenu";
import { useEffect, useState } from "react";
import Usercontaxt from "./utils/Usercontax";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { SearchItem } from "./pages/SearchItem";
import { SignUp } from "./componant/SignUp";
import { Userprofile } from "./componant/Userprofile";
import { invalidPath } from "./pages/invalidPath";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useParams();
  // const validRoutes = ["/home", "/about", "/contact"];
  // if (!validRoutes.includes(location.path )) {
  //   return <h1>wront url</h1>;
  // }
  console.log(location);
  return (
    <div className="app">
      <BrowserRouter>
        <Usercontaxt.Provider value={{ setIsLoggedIn }}>
          <Provider store={appStore}>
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />

              <Route
                path="/dashboard"
                element={
                  isLoggedIn ? <Dashboard /> : <Navigate to="/signup" replace />
                }
              />
              <Route
                path="/about"
                element={
                  isLoggedIn ? <About /> : <Navigate to="/signup" replace />
                }
              />
              <Route
                path="/contact"
                element={
                  isLoggedIn ? <Contact /> : <Navigate to="/signup" replace />
                }
              />
              <Route
                path="/cart"
                element={
                  isLoggedIn ? <Cart /> : <Navigate to="/signup" replace />
                }
              />
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/signup"
                element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/search" element={<SearchItem />} />
              <Route
                path="/restaurentmenu/:resId"
                element={<RestaurentMenu />}
              />
              <Route path="/userprofile" element={<Userprofile />} />
              <Route path="/**" element={<invalidPath />} />
            </Routes>
          </Provider>
        </Usercontaxt.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
