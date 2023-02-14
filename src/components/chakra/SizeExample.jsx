import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Center,
    Divider,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'

import { useState } from 'react'
import plus from '../../assets/icons/plus.svg'
import NewOrder from '../Orders/NewOrder'

export default function SizeExample() {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['xl']

    return (
        <>
            <Button
                bg={'none'}
                _active={'none'}
                _hover={'none'}
                onClick={() => handleClick(size)}
                key={size}
                m={6}>
                <div className="add_item">
                    <img src={plus} className='plusimg' />
                    <h4 className="name-bold">Yangi buyurtma <br /> qo'shish</h4>
                </div>
            </Button>


            <Drawer onClose={onClose} isOpen={isOpen} size={sizes}>
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>
                    <DrawerBody>
                        <div className="newOrderGrid">
                            <div className="new_order__section">
                                <h2 className="header-title">
                                    Yangi buyurtma qo’shish
                                </h2>
                                <ul className="new-order__category">
                                    <li className="new-order-listitem">Burger</li>
                                    <li className="new-order-listitem">Lavash</li>
                                    <li className="new-order-listitem">Salatlar</li>
                                    <li className="new-order-listitem">Shaverma</li>
                                </ul>
                                <div className="Neworder">
                                    <NewOrder />
                                    <NewOrder />
                                    <NewOrder />
                                    <NewOrder />
                                    <NewOrder />
                                </div>

                            </div>
                            <Center height='50px'>
                                <Divider orientation='vertical' />
                            </Center>
                            <div className="order__section">
                                <h2 className="header-title">
                                    Buyurtma ro’yxati
                                </h2>
                            </div>
                        </div>



                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}