import { Card, Grid, GridItem } from '@chakra-ui/react'
import Header from '../header/Header'
import { useState} from 'react'
import Navbar from '../Slidebar/Navbar'
import Cardd from '../Orders/Card'
import { parsePath, Route} from 'react-router-dom'
import Routers from '../../router/Routers'



export default function Grids() {

    const [row , setRow] = useState('Card')

    return (
        <Grid
            templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
            gridTemplateRows={'80px 1fr 30px'}
            gridTemplateColumns={'310px 1fr '}
            h='1200px'
            color='blackAlpha.700'
        >
            <GridItem pl='2' width={"100vw"} height={'97px'} position={"fixed"} bg={"#fff"} zIndex={"998"} boxShadow={"-1px 5px 5px -1px rgba(0, 0, 0, 0.23)"}>
                <Header setRow={setRow}/>
            </GridItem>
            <GridItem pl='2' area={'nav'} position={'fixed'} zIndex={"999"}>
                <Navbar />
            </GridItem>
            <GridItem pl='2' bg={'gray.200'} area={'main'}>
            <Routers Route={parsePath} row={row}/>
            </GridItem>
            <GridItem pl='2' area={'footer'}>

            </GridItem>
        </Grid>
    )
}