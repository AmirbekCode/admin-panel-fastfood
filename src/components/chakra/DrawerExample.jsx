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
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <Button  colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          width={'120%'}
        >
          <DrawerOverlay />
          <DrawerContent width={'120%'} >
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
            <>
                        <div className="time-info">
                            <div className="Card-number">
                                4567
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
                                    
                                </h4>
                            </div>
                            <div className="phone">
                                <Phone />
                                <h4 className="phone-number">
                                    
                                </h4>
                            </div>
                        </div>
                        <div className="place-info">
                            <div className="operator">
                                <p>Operator:</p>
                                <h4 className="operator1">
                                    Komilova M
                                </h4>
                            </div>
                            <div className="filial">
                                <p>Filial:</p>
                                <h4 className="location">
                                    Komilov M.
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
                        </div>

                        <div className="icon-section">
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
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export default DrawerExample