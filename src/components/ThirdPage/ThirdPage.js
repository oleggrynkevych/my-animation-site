import "./ThirdPage.scss";
import { CircleTextComponent } from "./CircleTextComponent";
import greenShoePng from "../../images/greenShoe.png";
import halfEllipse from "../../images/halfEllipse.png";
import orangeShoePng from "../../images/orangeShoe.png";
import React from "react";
import redHeelPng from "../../images/redHeel.png";
import smallEllipse from "../../images/smallEllipse.png";

export function ThirdPage() {
    return (
        <div className="third_page_container component" id="component-3">
            <div className="text_container">
                <div className="page_title">
                    SCHEWS COLLECTION
                </div>
                <p className="first_paragraph">
                    Therefore I created a range of boredom-busting edible shoes that Elsa could enjoy
                    chewing that would also clean her teeth.
                </p>
                <p className="second_paragraph">
                    Just like the dental chews I gave her at dinner-time to stop her staring at my plate!
                </p>
            </div>
            <div className="green_shoe shoe">
                <img src={greenShoePng} alt=""/>
            </div>
            <div className="red_heel shoe">
                <img src={redHeelPng} alt=""/>
            </div>
            <div className="orange_shoe shoe">
                <img src={orangeShoePng} alt=""/>
            </div>
            <div className="first_circle"/>
            <div className="second_circle">1</div>
            <div className="third_circle"/>
            <div className="big_half_ellipse">
                <img src={halfEllipse} alt="bigger half ellipse"/>
            </div>
            <div className="small_half_ellipse">
                <img src={smallEllipse} alt="bigger half ellipse"/>
            </div>
            <div className="circle_text_container">
                <CircleTextComponent text="DRAG TO CHANGE" rotation={4}/>
            </div>
        </div>
    );
}
