import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as Path } from '../../assets/icons/Path.svg';
import { ReactComponent as Truck } from '../../assets/icons/truck.svg';
import { ReactComponent as Xxx } from '../../assets/icons/x.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Card({item , state ,setState}) {


    function delet(id){
        const del = state.filter( (value) => value.id !== id );
        setState(del)
    }

    return (
                    <div className="Card">
                        <div className="time-info">
                            <div className="Card-number">
                                {item.id}
                            </div>
                            <div className="time">
                                <Clock />
                                00:24
                            </div>
                        </div>
                        <div className="ucer-info">
                            <div className="user">
                                <User />
                                <h4 className="name">
                                    {item.name}
                                </h4>
                            </div>
                            <div className="phone">
                                <Phone />
                                <h4 className="phone-number">
                                    {item.phone}
                                </h4>
                            </div>
                        </div>
                        <div className="price-info">
                            <div className='price'>
                                <Path />
                                35,400 UZS
                            </div>
                            <div className='price-truck'>
                                <Truck />
                                5,000 UZS
                            </div>
                            <div className='totalAmout'>
                                <p>Umumiy Summa:</p>
                                <h2 className="totalprice">
                                    40,400 UZS
                                </h2>
                            </div>
                        </div>
                        <div className="place-info">
                            <div className="operator">
                                <p>Operator:</p>
                                <h4 className="operator">
                                    Komilova M
                                </h4>
                            </div>
                            <div className="filial">
                                <p>Filial:</p>
                                <h4 className="location">
                                
                                </h4>
                            </div>
                        </div>
                        <div className="icon-section">
                            <div onClick={() => delet(item.id)} className="icon">
                                <Xxx />
                            </div>
                            <div className="icon">
                                <Check />
                            </div>


                        </div>
                    </div>
    )

}


export default Card;