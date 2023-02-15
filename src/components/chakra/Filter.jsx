import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Button,
    PopoverCloseButton,
} from '@chakra-ui/react'
import filter from '../../assets/icons/filter.svg'

export default function Filter() {
    return (
        <Popover>
            <PopoverTrigger>
                <Button borderRadius={"10px"}> <img src={filter} alt="" /></Button>
            </PopoverTrigger>
            <PopoverContent w={"320px"} h={"400px"}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Kategoriya</PopoverHeader>
                <PopoverBody>
                    <div className='select'>
                    <select name="drinks" id="filter">
                        <option value="volvo">Ichimliklar</option>
                        <option value="saab">Lavash</option>
                        <option value="mercedes">Gamburg</option>
                        <option value="audi">Shaverma</option>
                    </select>                        
                    </div>

                </PopoverBody>
            </PopoverContent>
        </Popover>
    )

}