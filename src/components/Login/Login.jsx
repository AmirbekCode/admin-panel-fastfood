import { useState } from "react";
import { Link } from "react-router-dom";
import formImg from "../../assets/images/3390.png"
import Grids from "../Grids/Grid";
import Header from "../header/Header";


function Login({setNav , row}) {

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
                    <Link to="/home">
                         <button className="ButtonRef">Tizimga Kirish</button>             
                    </Link>
                </div>
            </div>

        </div>
    )
}


export default Login;