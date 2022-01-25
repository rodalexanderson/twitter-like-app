import { signInGoogle } from "../../Services/authGoogle"
import Logo from "../../multimedia/SVG/logo.svg"
import Google from "../../multimedia/png/google.png"

const SignInGoogle = () => {
    return( 
        <>
        <div className="signin">
            <div className="leftsidesignin">
                <img src={Logo} alt="Logo Devs United" className="logo"/>
            </div>
            <div className="rightsidesignin">
                <div className="rightsigninmaxwidth">
                    <h1 className="h1signin">Lorem, ipsum dolor.</h1>
                    <h2 className="h2signin">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                    <div className="button">
                        <img src={Google} alt="google icon" className="google" />
                        <button onClick={signInGoogle} className="btngoogle">
                            <p className="textobtnsignin">Sign In With Google</p>
                        </button>
                    </div>
                    <p className="copyright">© 2020 Devs_United - <span className="spanred"><b>BETA</b> </span> </p>
                </div>   
            </div>
        </div>
        </>
    )
}

export default SignInGoogle