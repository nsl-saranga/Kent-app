import NavBar from '../../components/NavBar/NavBar.js';
import SideList from '../../components/SideList/SideList.js';


const FrontPage=()=>
{
    return(
    <div>
        <NavBar />
        <SideList margins={{marginTop:"4rem",marginLeft:"0"}}/>
    </div>    
    )
}
export default FrontPage