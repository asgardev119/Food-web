import { Dashboard } from "./pages/Dashboard";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Login from "./pages/login";
import Header from "./componant/Header";
import { Cart } from "./componant/Cart";
import Contact from "./componant/Contact";
import { About } from "./componant/About";
import { RestaurentMenu } from "./componant/RestaurentMenu";
import { useEffect, useState } from "react";
import Usercontaxt from "./utils/Usercontax";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      fullName: "Asgar Ansari",
    };
    setUserName(data.fullName);
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={appStore}>
          <Usercontaxt.Provider value={{ initialName: userName, setUserName }}>
            <Header />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/restaurentmenu/:resId"
                element={<RestaurentMenu />}
              />
            </Routes>
          </Usercontaxt.Provider>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
