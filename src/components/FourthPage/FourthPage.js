import "./FourthPage.scss";
import { CommentComponent } from "./CommentComponent/CommentComponent";
import commentsArr from "./Comments.json"
import orangeShoe from "../../images/bigOrangeShoe.png"

export function FourthPage () {
    return(
        <div className="fourth_page_container component" id="component-4">
           <div className="page_title">
                BENEFITS
            </div>
            <div className={`big_shoe_png`}>
                <img src={orangeShoe} alt=""/>
            </div>
            <div className="comments_container">
            { 
                commentsArr.map(
                    (comment, id) => <CommentComponent key={id} comment={comment}/>
                )
            }
            </div>
        </div>
    )
}