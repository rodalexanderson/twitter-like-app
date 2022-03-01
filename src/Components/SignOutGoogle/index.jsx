import { signOutGoogle } from "../../Services/authGoogle"
import Logout from "../../multimedia/png/logout.png"


const SignOutGoogle = () => {
    return( 
        <button onClick={signOutGoogle} className="logoutbtn">
            Sign Out
            <img src={Logout} alt="logout logo" />
        </button>
    )
}

export default SignOutGoogle