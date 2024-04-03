import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'> Delight your taste buds with a curated selection of mouthwatering dishes, ranging from savory appetizers 
            to decadent desserts, ensuring a culinary journey brimming with flavor and satisfaction</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev === item.menu_name?'All':item.menu_name)} key={index}  className="explore-menu-list-item">
                        <img className={category===item.menu_name?'active':''} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>                  
                )
            })}
        </div>

        <hr />

    </div>
  )
}

export default Exploremenu