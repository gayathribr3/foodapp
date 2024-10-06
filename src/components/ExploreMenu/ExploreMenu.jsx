import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    //destructuring categpry and setCategory function
    //if i click on an image under exploremenu, active class will be added to it.
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse range of menu featuring a delectable array of dishes crafted with love to perfection.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{ 
                return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                 <img className={category===item.menu_name?"active":" "} src={item.menu_image} alt="" />
                 <p>{item.menu_name}</p>
                </div>
                )})}
    </div>
    <hr />
</div>
  )}
export default ExploreMenu
//This expression checks if the category state is equal to the item.menu_name.
//If true, it assigns the class name "active" to the element, likely for styling purposes (possibly highlighting the selected category).
//If not true, it assigns an empty space as the class name.


/* This function takes a previous state value (prev) as a parameter.
It checks if the prev state (category state most likely) is equal to the item.menu_name (which might represent the name of a menu category).
If they are equal, it sets the category to "All", likely resetting the selection.
If they are not equal, it sets the category to the current item.menu_name, effectively selecting that category.*/