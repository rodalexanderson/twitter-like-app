import { signInGoogle } from "../../Services/authGoogle"

const SignInGoogle = () => {
    return( 
        <button onClick={signInGoogle}>
            Sign In With Google
        </button>
    )
}

export default SignInGoogle