import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname } = location;

    if (
      (pathname === "/" || pathname === "/signin" || pathname === "/signup") &&
      localStorage.getItem("access_token")
    ) {
      navigate("/todo");
    }

    if (pathname === "/todo" && !localStorage.getItem("access_token")) {
      navigate("/signin");
    }
  }, [location, navigate]);
};

export default useRedirect;
