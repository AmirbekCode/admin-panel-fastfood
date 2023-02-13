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
import { useState } from "react"

let activeStyle = {

};

let activeClassName = "underline";







export default function Navbar() {


    const [buyurtma, setBuyurtma] = useState('')

    function Clickbuyurtma() {
        setBuyurtma('active-item')
        setMaxsulot('')
        setKategori('')
        setXisobot('')
        setMijoz('')
        setBuy('')
        setFilial('')
    }

    const [maxsulot, setMaxsulot] = useState('')

    function Clickmaxsulot() {
        setMaxsulot('active-item')
        setBuyurtma('')
        setKategori('')
        setXisobot('')
        setMijoz('')
        setBuy('')
        setFilial('')
    }

    const [kategori, setKategori] = useState('')

    function Clickkategori() {
        setKategori('active-item')
        setMaxsulot('')
        setBuyurtma('')
        setXisobot('')
        setMijoz('')
        setBuy('')
        setFilial('')
    }

    const [filial, setFilial] = useState('')

    function Clickfilial() {

        setFilial('active-item')
        setKategori('')
        setMaxsulot('')
        setBuyurtma('')
        setXisobot('')
        setMijoz('')
        setBuy('')


    }

    const [buy, setBuy] = useState('')

    function Clickbuy() {

        setBuy('active-item')
        setFilial('')
        setKategori('')
        setMaxsulot('')
        setBuyurtma('')
        setXisobot('')
        setMijoz('')

    }

    const [mijoz, setMijoz] = useState('')

    function Clickmijoz() {

        setMijoz('active-item')
        setBuy('')
        setFilial('')
        setKategori('')
        setMaxsulot('')
        setBuyurtma('')
        setXisobot('')

    }


    const [xisobot, setXisobot] = useState('')

    function Clickxisobot() {

        setXisobot('active-item')
        setMijoz('')
        setBuy('')
        setFilial('')
        setKategori('')
        setMaxsulot('')
        setBuyurtma('')
    }


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
                    <NavLink to="/">
                        <li onClick={Clickbuyurtma} className={`categories-item ${buyurtma}`}>
                            <div className="df">
                                <img src={Check} className="c-icon" />
                                <h2 className="c-name">Buyurtmalar</h2>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to='/product' >
                        <li onClick={Clickmaxsulot} className={`categories-item ${maxsulot}`}>
                            <div className="df ">
                                <img src={Check2} className="c-icon " />
                                <h2 className="c-name">Maxsulotlar</h2>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink>
                        <li onClick={Clickkategori} className={`categories-item ${kategori}`}>
                            <div className="df">
                                <img src={Check3} className="c-icon" />
                                <h2 className="c-name">Kategoriyalar</h2>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink>
                        <li onClick={Clickfilial} className={`categories-item ${filial}`}>
                            <div className="df">
                                <img src={Check4} className="c-icon" />
                                <h2 className="c-name">Filiallar</h2>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink>
                        <li onClick={Clickbuy} className={`categories-item ${buy}`}>
                            <div className="df">
                                <img src={Check5} className="c-icon" />
                                <h2 className="c-name">Buyurtmalar</h2>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink>
                        <li onClick={Clickmijoz} className={`categories-item ${mijoz}`}>
                            <div className="df">
                                <img src={Check6} className="c-icon" />
                                <h2 className="c-name">Mijozlar</h2>
                            </div>
                        </li>
                    </NavLink>
                    <li onClick={Clickxisobot} className={`categories-item ${xisobot}`}>
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

