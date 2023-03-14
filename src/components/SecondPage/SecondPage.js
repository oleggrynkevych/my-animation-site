import "./SecondPage.scss";
import dogPhoto from "../../images/dogPhoto.png";
import shoePhoto from "../../images/shoePhoto.png";

export function SecondPage() {
    return (
        <div className="second_page_container component" id="component-2">
            <div className="main_text_container">
                HOW SCHEWS WAS CREATED
            </div>
            <div className="main_content">
                <div className="first_comment">
                    <div className="first_content_image">
                        <img src={dogPhoto} alt=""/>
                        <div className="first_content_comment">
                            👋 Hi, I’m Elsa
                        </div>
                    </div>
                    <span className="first_content_text">
                        Once I adopted my beloved bulldog puppy, Elsa. To say she’s a chewer
                        is an understatement!
                    </span>
                </div>
                
                <div className="second_comment">
                    <span className="second_content_text">
                        And guess what <br/> was her favourite toy? — My shoes!
                    </span>
                    <div className="second_content_image">
                        <img src={shoePhoto} alt=""/>
                        <div className="second_content_comment">
                            Help 😢
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
