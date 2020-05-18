import React, {useEffect, useState} from 'react';
import { Navbar, NavItem, Nav, NavLink , NavbarBrand} from 'reactstrap';
import   useMenuFetch  from '../../hooks/useMenuFetch';
import Items from '../Items';
import  './Header.css';


const Header = () => {

   const [items,menuItems] = useMenuFetch();
   const [section,setSection] = useState('');
   const [selectedItems,setSelectedItems] = useState([]);
   const [activeItem,setActiveItem] = useState();

    const clickHandler = (e,itemOptions,itemId) => {
        setActiveItem(itemId);     
        // Get the Items for the category on Menu Click.
        e.preventDefault();
        //get item Refs
        const itemIds = itemOptions.map((option) =>  option._ref );
        //Get the Items using itemIds fro master items list 
        const  selectedItems = items.filter((item) => {
                   return itemIds.includes(item._id)
             }).map(selectedItem => selectedItem);
           setSelectedItems(selectedItems) ; 
               
   }
    const processImageUrl = (item) => item.image.asset._ref.replace('-','s/').replace(/\-(?=[^-]*$)/,'.') ;

    const item =  menuItems.map((item) => {
        console.log(item)
       
      return (<NavItem>
               <NavLink href="" id={item._id} onClick={(e) => clickHandler(e,item.options,item._id)} className={ (item._id === activeItem) ? 'active': ''  }
               >
                 <img src={processImageUrl(item)}  width="20%" height="20%"/> 
                 <span style= {{ display:"block" }}> {item.name.en} </span>
             </NavLink> 
       </NavItem>)
    });

    return (
      <div className="container">
        <div className = "row">
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar> 
                  <NavItem> 
                     <NavLink href="" onClick={ (e) => clickHandler(e,menuItems)} > 
                        <img src="images/1621f503107bc95d1c8b8de88e17881ecba408bf-870x570.png" width="20%" height="20%" /> 
                        <span stlye={{display:"block"}}> Menu </span>
                      </NavLink>
                   </NavItem>
                       {item}
                </Nav>
            </Navbar>
        </div>    
        {selectedItems.length>1 ? <Items items = {selectedItems}/> : <Items items = {menuItems}/> }
        </div>
    );
}

export default Header;
