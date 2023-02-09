import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ChevronDownIcon,
  Button,
  Image
} from '@chakra-ui/react'
import Check7 from '../../assets/icons/bar-chart-2.svg'
import settings from '../../assets/icons/settings copy 2.svg'


export default function Senu() {
  return (
    <Menu>
      <MenuButton>
        <div className="df">
          <img src={Check7} className="c-icon" />
          <h2 className="c-name">Xisobot ></h2>
        </div>
      </MenuButton>
      <MenuList>
        <MenuItem as='a' href='#'>
          <div className="dfp">
            <img src={settings} className="c-iconp" />
            <h2 className="c-namep">Tizim sozlamalari</h2>
          </div>
        </MenuItem>
        <MenuItem as='a' href='#'>
          <div className="dfp">
            <img src={settings} className="c-iconp" />
            <h2 className="c-namep">Lavozim sozlamalari</h2>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>

  )
}