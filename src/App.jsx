import AuthLayout from "./components/organism/templates/AuthLayout";
import Register from "./components/organism/Register";

function App() {
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen">
    <AuthLayout title="Register">
      <Register/>
    </AuthLayout>
    </div>
    </>
  )
}

export default App
