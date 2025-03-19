import { Dashboard } from "./pages/Dashboard";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Header from "./componant/Header";
import { Cart } from "./componant/Cart";
import Contact from "./componant/Contact";
import { About } from "./componant/About";
import { RestaurentMenu } from "./componant/RestaurentMenu";
import { useState } from "react";
import Usercontaxt from "./utils/Usercontax";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { SearchItem } from "./pages/SearchItem";
import { SignUp } from "./componant/SignUp";
import { Userprofile } from "./componant/Userprofile";
import { InvalidPath } from "./pages/invalidPath";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                  isLoggedIn ? (
                    <Dashboard key="dashboard" />
                  ) : (
                    <Navigate to="/signin" replace />
                  )
                }
              />
              <Route
                path="/about"
                element={
                  <About /> 
                }
              />
              <Route
                path="/contact"
                element={
                  <Contact /> 
                }
              />
              <Route
                path="/cart"
                element={
                  isLoggedIn ? <Cart /> : <Navigate to="/signup" replace />
                }
              />
              <Route path="/signup" element={<SignIn />} />
              <Route
                path="/signin"
                element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/search" element={<SearchItem />} />
              <Route
                path="/restaurentmenu/:resId"
                element={<RestaurentMenu />}
              />
              <Route
                path="/userprofile"
                element={
                  isLoggedIn ? (
                    <Userprofile />
                  ) : (
                    <Navigate to="/signin" replace />
                  )
                }
              />
              <Route path="*" element={<InvalidPath />} />
            </Routes>
          </Provider>
        </Usercontaxt.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
