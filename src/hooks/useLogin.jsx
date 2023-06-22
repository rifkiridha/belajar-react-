import { useEffect,useState } from "react";
import { getUsername } from "../services/authservices";

export const useLogin = () => {
    const [username, setUsername] = useState("");

useEffect(()=>{
    const token = localStorage.getItem("token");
    // cek token, klo gaaada diarahin ke login

  if (token) {
    setUsername(getUsername(token));
  } else{
    window.location.href="/login"
  }
  },[]);

  return username;
}