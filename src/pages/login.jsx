import { Link } from "react-router-dom";
import Login from "../components/organism/Login";
import AuthLayout from "../components/organism/templates/AuthLayout";

export default function AppLogin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[url('../../public/images/background.jpg')]">
        <AuthLayout title="Login" desc="Silahkan Masuk">
          <Login />
          <p className="text-sm mt-4 text-center">
            Don't have an account?
            <a className="font-bold text-blue-500" href="/register">Register</a>

            {/* pindah antar komponen/halaman */}
            <Link className="font-bold text-blue-500" to="/register">
              Register
            </Link>
          </p>
        </AuthLayout>
      </div>
    </>
  )
}
