import React from 'react'
import { SiAccenture } from "react-icons/si";
import './SideList.css'


const SideList=(props)=>
{
    return (
        <div className="container-items" style={props.margins}>
        <div className="topic">Categories</div>    
        <button>Fresh Milk <SiAccenture className='Icon'/>    </button>
        <button>Curd <SiAccenture className='Icon'/>   </button>
        <button>Ice Cream <SiAccenture className='Icon'/>   </button>
        <button>Cheese <SiAccenture className='Icon'/>   </button>
        <button>Yoghurt <SiAccenture className='Icon'/>   </button>
        <button>Watalappan <SiAccenture className='Icon'/>  </button>
    </div>
    )
}
export default SideList