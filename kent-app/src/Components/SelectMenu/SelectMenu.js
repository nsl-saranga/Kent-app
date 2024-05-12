import './SelectMenu.css'
import React from 'react';
import Products from '../../Data/data';

const SelectMenu=({productId})=>{
    // const [selectOption1, setSelectOption1] = useState('default')

    // const handleChange1 = (event) => {
    //     setSelectOption1(event.target.value);
    //   };
    if(productId)
        {
            const product = Products.find(product=>product.type===productId)
            const flavours = product.flavours
            return(
                <div className="select-menu-container">
                   <select>
                    <option>Flavour</option>
                    {flavours.map(flavour=>(<option value={flavour}>{flavour}</option>))}
                    </select>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            )
        }

    else
        {
            return(
                <div className="select-menu-container">
                    <select>
                    <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            )
        }

   
}

export default SelectMenu