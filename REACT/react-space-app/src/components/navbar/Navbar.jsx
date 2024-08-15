import { Link } from 'react-router-dom';
import AstroLogo from '/rocket.svg';
import './Navbar.css';

function Navbar({ links }) {
    const navStyles = {
        backgroundColor: "rgba(36, 9, 98, 0.8)",
    };

    return (
        <nav className="nav-container" style={navStyles}>
            <img className="nav-logo" src={AstroLogo} alt="space-app logo" />
            <div className="links-container">
                {links.map((item) => (
                    <Link key={item.id} to={item.href}>
                        {item.text}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
