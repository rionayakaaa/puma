import '../styles/Header.css'
import image from '../images/p.png'

function Header() {
    return (
        <>
            <nav>
                    <img className='logo' src={image} alt="" />
                <ul>
                    <li>New Arrivals</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>SPEEDCAT</li>
                    <li>Collections</li>
                    <li>Sport</li>
                    <li>Outlet</li>
                </ul>
            </nav>
        </>
    )

}

export default Header;