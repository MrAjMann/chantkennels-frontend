import { userLogin } from "../Services/authServices";
import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <>
      <Login name={"User Name"} callback={userLogin}></Login>
      <p style={{ marginTop: "2rem" }}>
        Have an account? <Link to={"/user/register"}>register</Link>
      </p>
    </>
  );
}
