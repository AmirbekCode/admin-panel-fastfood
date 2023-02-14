import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as Path } from '../../assets/icons/Path.svg';
import { ReactComponent as Truck } from '../../assets/icons/truck.svg';
import { ReactComponent as Xxx } from '../../assets/icons/x.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ReactComponent as Return } from '../../assets/icons/return.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../styles/drawer.css'
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  //   const [state, setState] = useState([]);

  //   async function get() {
  //     try {
  //         return await axios.get("https://jsonplaceholder.typicode.com/").then((res) => setState(res.data));
  //     } catch (e) {
  //         console.log(e);
  //     }
  // }

  //   useEffect(() => {
  //       get();
  //   }, []);



  return (
    <>
      <Button onClick={onOpen}>
        <Return/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        width={'120%'}
      >
        <DrawerOverlay />
        <DrawerContent padding={"0"} >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody padding={"0"}>
            <>
              <div className='Container'>
                <div className="time-info2">
                  <div className="Card-number">
                    4567
                  </div>
                  <div className="time">
                    <Clock />
                    00:24
                  </div>
                </div>
                <div className="ucer-info2">
                  <div className="user">
                    <User />
                    <h4 className="name2">
                      Komilov Muhammad
                    </h4>
                  </div>
                  <div className="phone">
                    <Phone />
                    <h4 className="phone-number">
                      +99894 413 55 77
                    </h4>
                  </div>
                </div>
                <div className="place-info2">
                  <div className="operator">
                    <p>Operator:</p>
                    <h4 className="operator2">
                      Komilova M
                    </h4>
                  </div>

                  <div className="filial">
                    <p>Filial:</p>
                    <h4 className="location2">
                      Komilov M.
                    </h4>
                  </div>
                </div>
                <hr />
              </div>
              <div className="products-info">
                <ul className="list-name">
                  <li>Maxsulotlar</li>
                  <li>Soni Narxi</li>
                </ul>

              </div>
              <div className="price-info2">
                <div className='price2'>
                  <Path />
                  35,400 UZS
                </div>
                <div className='price-truck2'>
                  <Truck />
                  5,000 UZS
                </div>
              </div>

              <div className="icon-section2">
                <div className="icon">
                  <Xxx />
                </div>
                <div className="icon">
                  <Check />
                </div>


              </div>
            </>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Bekor qilish
            </Button>
            <Button colorScheme='blue'></Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


export default DrawerExample