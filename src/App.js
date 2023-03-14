import "./App.scss";
import "@fontsource/inter";
import "@fontsource/overlock";
import { FirstPage } from "./components/FirstPage/FirstPage";
import { FourthPage } from "./components/FourthPage/FourthPage";
import { Header } from "./components/Header/Header";
import { SecondPage } from "./components/SecondPage/SecondPage";
import { ThirdPage } from "./components/ThirdPage/ThirdPage";
import { useEffect } from "react";
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";

function App() {
    useEffect(() => {
        const options = {
            rootMargin: "0px",
            threshold: 0.5
        }

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const componentId = entry.target.id;

                    if (componentId === "component-1" || componentId === "component-4") {
                        document.body.querySelector(".header").classList.remove("header_scroll");
                    } else {
                    document.body.querySelector(".header").classList.add("header_scroll");
                    }

                    if (componentId === "component-1") {
                        document.body.querySelector(".main_shoe").classList.add("main_shoe_animation_back");
                    } else {
                        document.body.querySelector(".main_shoe").classList.remove("main_shoe_animation_back");
                    }

                    if (componentId === "component-2") {
                        document.body.querySelector(".main_shoe").classList.add("main_shoe_animation");
                        document.body.querySelector(".main_text_container").classList.add("main_content_animation");
                        document.body.querySelector(".main_content").classList.add("main_content_animation");
                    } else {
                        document.body.querySelector(".main_shoe").classList.remove("main_shoe_animation");
                        document.body.querySelector(".main_text_container").classList.remove("main_content_animation");
                        document.body.querySelector(".main_content").classList.remove("main_content_animation");
                    }

                    if (componentId === "component-3") {
                        document.body.querySelector(".text_container").classList.add("text_container_animation");
                        document.body.querySelector(".red_heel").classList.add("shoe_animation");
                    } else {
                        document.body.querySelector(".text_container").classList.remove("text_container_animation");
                        document.body.querySelector(".red_heel").classList.remove("shoe_animation");
                    }

                    if (componentId === "component-4") {
                        document.body.querySelector(".big_shoe_png").classList.add("big_shoe_png_animation");
                        document.body.querySelector(".comments_container").classList.add("comments_container_slide_up");
                    } else {
                        document.body.querySelector(".big_shoe_png").classList.remove("big_shoe_png_animation");
                        document.body.querySelector(".comments_container").classList.remove("comments_container_slide_up");
                    }

                }
            });
        }

        const observer = new IntersectionObserver(callback, options);

        const components = document.querySelectorAll(".component");

        components.forEach(component => {
            observer.observe(component);
        });

        return () => observer.disconnect();
    },[]);

    return (
        <div className="App">
            <Header />
            <Fullpage>
                <FullPageSections>
                    <FullpageSection> <FirstPage/> </FullpageSection>
                    <FullpageSection> <SecondPage/> </FullpageSection>
                    <FullpageSection> <ThirdPage/> </FullpageSection>
                    <FullpageSection> <FourthPage/> </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </div>
    );
}

export default App;
