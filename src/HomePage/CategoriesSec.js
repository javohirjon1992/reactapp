import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';



const CategoriesSec = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <div className="categories">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                <MenuIcon classname="menuIcon"/>
                AllCategories
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem> Menu 1 </DropdownItem>
                <DropdownItem> Menu 2 </DropdownItem>
                <DropdownItem> Menu 3 </DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <ul className="links">
            <li className="link_item">
                <a href="#" className="link active">
                    Home
                </a>
            </li>
            
            <li className="link_item">
                <a href="#" className="link">
                    New arrivals
                </a>
            </li>

            <li className="link_item">
                <a href="#" className="link">
                    Trending
                </a>
            </li>

            <li className="link_item">
                <a href="#" className="link">
                    Deals for you
                </a>
            </li>

            <li className="link_item">
                <a href="#" className="link">
                    Discount
                </a>
            </li>

            <li className="link_item">
                <a href="#" className="link">
                    Weekly offers
                </a>
            </li>

            <li className="link_item">
                <a href="#" className="link">
                    Become vendor
                </a>
            </li>




        </ul>



        </div>
        );
};



export default CategoriesSec;