import React,{useState,useEffect} from 'react'

const useMenuFetch = () => {

   const [menuItems,setMenuItems] = useState([]);
   const [items,setItems] = useState([]);



    useEffect(() => {
        //items call
        fetch('api/items')
          .then(res => res.json())
          .then(data => setItems(data))
   },[]);

     useEffect(() => {
       let menuItems;
        fetch('/api/menu')
         .then(menuResp => menuResp.json())
         .then(data => {
            //Menu -- Section Refs
           let menu =  data.options.map( element =>  element._ref);
            //Make Section call 
              fetch('api/sections')
                .then(sections => sections.json())
                .then( sectionData => {
                    // match section refs and get the Menu Items Object 
                     menuItems =  sectionData.filter((section) => {
                             
                          return   menu.includes(section._id) 
                      }).map( selectedElem => selectedElem)
                   
                    setMenuItems(menuItems);
              })
             
        })
        
   },[]);

   return [items,menuItems];

}

export default useMenuFetch;