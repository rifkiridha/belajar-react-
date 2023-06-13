import AuthLayout from "../components/organism/templates/AuthLayout";
import Register from "../components/organism/Register";
import { Link } from "react-router-dom";

export default function AppRegister() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <AuthLayout title="Daftar" desc="Silahkan Daftar">
          <Register />
          <p className="text-sm mt-4 text-center">
            Already have an account?
            {/* pindah antar komponen/halaman */}
            <Link className="font-bold text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </AuthLayout>
      </div>
    </>
  )
}
