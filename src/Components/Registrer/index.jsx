import Logo from "../../multimedia/SVG/logo.svg"

const Registrer = () => {
    return( 
        <>
        <div className="signin">
            <div className="leftsidesignin">
                <img src={Logo} alt="Logo Devs United" className="logo"/>
            </div>
            <div className="rightsidesignin">
                <div className="rightregistrermaxwidth">
                    <h1 className="h1signin">Welcome!  <br /><span className="spanred">Name</span> </h1>
                    <textarea className="textarea">
                        Type your username
                    </textarea>
                    <p>Select your favourite color</p>
                    <div className="colores">
                        <button className="cuadrado"></button>
                        <button className="cuadrado1"></button>
                        <button className="cuadrado2"></button>
                        <button className="cuadrado3"></button>
                        <button className="cuadrado4"></button>
                        <button className="cuadrado5"></button>
                    </div>
                    <div className="button">
                        <button className="btnregistrer">
                            <p className="textobtnregistrer">CONTINUE</p>
                        </button>
                    </div>
                    <p className="copyright">© 2020 Devs_United - <span className="spanred"><b>BETA</b> </span> </p>
                </div>   
            </div>
        </div>
        </>
    )
}

export default Registrer