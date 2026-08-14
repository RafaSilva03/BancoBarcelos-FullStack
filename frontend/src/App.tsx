import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./common/Loader";
import { AuthProvider } from "./hook/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PageTitle from "./components/PageTitle";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/Auth/SignIn";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute
              element={
                <>
                  <PageTitle title="Banco Barcelos | Dashboard" />
                  <Dashboard />
                </>
              }
            />
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Banco Barcelos | Sign In" />
              <SignIn />
            </>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
