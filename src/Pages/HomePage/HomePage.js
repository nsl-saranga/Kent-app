import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import SelectMenu from '../../Components/SelectMenu/SelectMenu';
import Card from '../../Components/Card/Card';
import './HomePage.css'

function HomePage() {
  return (
    <>
      <NavBar/>
      <div className='page-content'>
        <SideBar/>
        <div className='page-column'>
          <SelectMenu/>
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

export default HomePage;