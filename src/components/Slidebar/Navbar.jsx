import ImgLogo from "../../assets/images/Bitmap.png"
import './navbar.css'
import Check from '../../assets/icons/check-circle.svg'
import Check2 from '../../assets/icons/archive.svg'
import Check3 from '../../assets/icons/layers.svg'
import Check4 from '../../assets/icons/map-pin.svg'
import Check5 from '../../assets/icons/archive.svg'
import Check6 from '../../assets/icons/users.svg'
import Check7 from '../../assets/icons/bar-chart-2.svg'
import LogOut from '../../assets/icons/log-out.svg'
import { NavLink } from "react-router-dom"
import Accardion from "../chakra/Menu"
import Menu from "../chakra/Menu"

let activeStyle = {

};

let activeClassName = "underline";


export default function Navbar() {
    return (
        <div className="Navbar" >
            <div className="profile-section">
                <img src={ImgLogo} className="profile_picture" />
                <div className="user-info">
                    <h4 className="name">
                        Fast Food
                    </h4>
                    <p className="description">
                        Online maxsulot sotuvi
                    </p>
                </div>
            </div>
            <div className="categories">
                <ul className="categories-list">
                    <li className="categories-item">

                        <NavLink
                            to="test"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            <div className="df">
                                <img src={Check} className="c-icon" />
                                <h2 className="c-name">Buyurtmalar</h2>
                            </div>
                        </NavLink>
                    </li>
                    <li className="categories-item">
                        <NavLink>
                            <div className="df">
                                <img src={Check2} className="c-icon" />
                                <h2 className="c-name">Maxsulotlar</h2>
                            </div>
                        </NavLink>
                    </li>

                    <li className="categories-item">
                        <NavLink>
                            <div className="df">
                                <img src={Check3} className="c-icon" />
                                <h2 className="c-name">Kategoriyalar</h2>
                            </div>
                        </NavLink>
                    </li>

                    <li className="categories-item">
                        <NavLink>
                            <div className="df">
                                <img src={Check4} className="c-icon" />
                                <h2 className="c-name">Filiallar</h2>
                            </div>
                        </NavLink>
                    </li>
                    <li className="categories-item">
                        <NavLink>
                            <div className="df">
                                <img src={Check5} className="c-icon" />
                                <h2 className="c-name">Buyurtmalar</h2>
                            </div>
                        </NavLink>
                    </li>
                    <li className="categories-item">
                        <NavLink>
                            <div className="df">
                                <img src={Check6} className="c-icon" />
                                <h2 className="c-name">Mijozlar</h2>
                            </div>
                        </NavLink>
                    </li>
                    <li className="categories-item">
                        <Menu />
                    </li>
                </ul>
                <div className="log-out">
                    <img src={LogOut} className="c-icon" />
                    <h2 className="c-name">Chiqish</h2>
                </div>
            </div>
        </div>

    )

}

