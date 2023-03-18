import React, {useEffect} from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

export const NewSession = () => {
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const loginToken = urlParams.get('login_token');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/sessions/create?login_token=${loginToken}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        Cookies.set("token", response.auth_token);
        navigate("/")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [])
  
  return (
    <>
     
    </>
  )
}