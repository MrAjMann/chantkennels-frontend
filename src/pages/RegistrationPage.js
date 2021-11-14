import {userSignUp} from '../Services/authServices'
import Register from "../components/Register";


export default function UserRegister(){
    return(
        <>
            <Register name={"User Name"} callback={userSignUp}></Register>
        </>
        
    )
}