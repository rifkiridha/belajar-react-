import AuthLayout from "../components/templates/AuthLayout";
import Register from "../components/organism/Register";
import { Link } from "react-router-dom";
import Button from "../components/atoms/Button";

export default function AppRegister() {
    return (
<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
            <img src="public/images/mobil.jpg" alt="gambar" className="p-4 rounded-t-lg" />
			</div>
            <AuthLayout title="Daftar" desc="Silahkan Daftar" type="register"></AuthLayout>
		</fieldset>
	</form>
</section>

                )
}


