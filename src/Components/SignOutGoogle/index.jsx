import { signOutGoogle } from "../../Services/authGoogle"

const SignOutGoogle = () => {
    return( 
        <button onClick={signOutGoogle}>
            Sign Out
        </button>
    )
}

export default SignOutGoogle