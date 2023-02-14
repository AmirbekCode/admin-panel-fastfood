import "./header.css"

import Icon1 from '../../assets/icons/Group 2.png'
import Icon2 from '../../assets/icons/Group.svg'
import DrawerExample from "../chakra/DrawerExample"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import SizeExample from "../chakra/SizeExample"


export default function Header({setRow}) {
    return (
        <div className="fixed">
            <div className="Header">
                <SizeExample/>
                <div className="header_categories">
                    <ul className="header_category">
                        <li>
                            <NavLink>
                                <h4 className="categories_name">
                                    Yangi
                                </h4>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <h4 className="categories_name">
                                    Qabul qilingan
                                </h4>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <h4 className="categories_name">
                                    Jo'natilgan
                                </h4>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                <h4 className="categories_name">
                                    Yopilgan
                                </h4>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="layout">
                    
                    <ul className="layout1">
                        <li  onClick={() => setRow('Card')}>
                            <img src={Icon1}/>
                        </li>
                        <li  onClick={() => setRow('Row')}>
                            <img src={Icon2}/>
                        </li>
                    </ul>
                </div>
                <DrawerExample/>
            </div>
        </div>

    )
}