import formImg from "../../assets/images/3390.png"


function Login() {
    return (
        <div className="Login">
            <div className="flexContent">
                <div className="ImgBox">
                    <img src={formImg} alt="" />
                </div>
                <div className="form">
                    <h4 className="welcome">
                        Tizimga xush kelibsiz !
                    </h4>
                    <span>Tizimga kirish uchun, login va parol orqali <br />
                        autentifikatsiya jarayonidan o’ting</span>
                    <div className="InputSection">
                        <div className="Inputt">
                            <div className="indicator1"></div>
                            <input type="text" className="InputUser"/>
                        </div>
                        <div className="Inputt">
                            <div className="indicator2"></div>
                            <input type="password" className="InputPassword"/>                            
                        </div>
                    </div>
                </div>
                <button className="">Tizimga Kirish</button>
            </div>

        </div>
    )
}


export default Login;