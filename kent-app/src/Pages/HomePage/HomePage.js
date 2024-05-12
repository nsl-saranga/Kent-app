import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import SelectMenu from '../../Components/SelectMenu/SelectMenu';
import Card from '../../Components/Card/Card';
import './HomePage.css'
import { useParams } from 'react-router-dom';

function HomePage() {
  const {productId}= useParams()
  if(productId)
    {
      return (
        <>
          <NavBar/>
          <div className='page-content'>
            <SideBar/>
            <div className='page-column'>
              <SelectMenu productId={productId}/>
              <div className='card-container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
          </div>
        </>
      )   
      
    }
    else
    {
      return (
        <>
          <NavBar/>
          <div className='page-content'>
            <SideBar/>
            <div className='page-column'>
              <SelectMenu productId={null}/>
              <div className='card-container'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
          </div>
        </>
      )   
      

    }
    
}

export default HomePage;