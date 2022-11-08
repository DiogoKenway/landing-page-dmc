import "./header.scss"
import { logo } from '../../assets/images'

const Header = () => (
    <div className="header">
        <div className="header__content container">
            <div className="header__logo">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="header__nav">
                <li><a href="#">sobre</a></li>
                <li><a href="#">novidades</a></li>
                <li><a href="#">personagens</a></li>
                <li><a href="#">suporte</a></li>
            </ul>
        </div>
    </div>
)

export default Header