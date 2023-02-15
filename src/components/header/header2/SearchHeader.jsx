import "../header.css"
import plus from '../../../assets/icons/plus.svg'
import Search from '../../../assets/icons/search.svg'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { Input } from "@chakra-ui/react"
import Filter from '../../chakra/Filter'
import SizeExample from "../../chakra/SizeExample"

export default function SearchHeader() {
    return (
        <div className="fixed">
            <div className="Header2">
                <SizeExample />
                <div className="input_section">
                    <input type="text" className="inputHeader" placeholder="Qidirish..." />
                    <img src={Search} alt="" />

                </div>
                <Filter />
            </div>
        </div>

    )
}