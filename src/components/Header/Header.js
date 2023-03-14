import "./Header.scss";
import iconBag from "../../images/iconBag.png";
import logo from "../../images/logo.png";

export function Header () {

    return(
        <div className="header">
            <nav className="navigation">
                <ul>
                    <li alt="">OUR STORY</li>
                    <li alt="">BENEFITS</li>
                    <li alt="">PRODUCTS</li>
                    <li alt="">FAQ</li>
                </ul>
            </nav>
            <div className="header_logo">
                <img src={logo} alt=""/>
            </div>
            <div className="header_right_block">
                <select className="header_right_block_select">
                    <option>ENG</option>
                </select>
                <div className="header_right_block_icon">
                    <img src={iconBag} className="icon_bag" alt=""></img>
                </div>
                <div className="header_right_block_buttons">
                    <button className="header_right_block_button_login" alt="">LOG IN</button>
                    <button className="header_right_block_button_signup" alt="">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}