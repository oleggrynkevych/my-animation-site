import "./FirstPage.scss";
import dog from "../../images/dog.png";
import mainShoe from "../../images/mainShoe.png";


export function FirstPage () {
    return(
        <div className="first_page_container component" id="component-1">
            <nav className="menu">
                <ul>
                    <li className="non_style"><span>PREVENTS DENTAL DISEASE</span></li>
                    <li><span>DELICIOUS</span></li>
                    <li><span>VEGAN</span></li>
                    <li><span>FUN</span></li>
                    <li><span>GLUTEN-FREE</span></li>
                    <li><span>HIGHLY DIGESTIBLE</span></li>
                </ul>
            </nav>
            <div>
                <span className="first_page_main_text">THE 100% NATURAL</span>
                <span className="first_page_main_text">DENTAL <span className="first_page_main_text purple_text">CHEWY SHOES</span></span>
                <div className="first_page_block">
                    <button className="first_page_button" alt="">TASTE IT</button>
                    <span className="first_page_main_text">FOR DOGS</span>
                </div>
            </div>
            <div className="first_page_dog_block">
                <div className="dog_photo_container">
                    <div className="circle"></div>
                    <div className="dog_photo">
                        <img className="dog_img" src={dog} alt=""></img>
                    </div>
                </div>
            </div>
            <div className="main_shoe">
                <img src={mainShoe} alt=""></img>
            </div>
        </div>
    )
}