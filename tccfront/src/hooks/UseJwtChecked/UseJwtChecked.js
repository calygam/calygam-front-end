import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const useAuth = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  
 

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("rank");
    setToken(null);
    navigate("/login");
  };

  useEffect(() => {
    if (!token) return logout();

    const expiresIn = (() => {
      try {
        const { exp } = jwtDecode(token);
        return (exp - Math.floor(Date.now() / 1000)) * 1000;
      } catch {
        return 0;
      }
    })();

    if (expiresIn > 0) {
      const timeout = setTimeout(logout, expiresIn);
      return () => clearTimeout(timeout);
    } else {
      logout();
    }
  }, [token]);

  useEffect(() => {
    const syncStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", syncStorage);
    return () => window.removeEventListener("storage", syncStorage);
  }, []);

  return { token, setToken };
};

export default useAuth;