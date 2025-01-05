import { useState, useEffect } from "react";
import headerImg from "../images/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    const [animationStyle, setAnimationStyle] = useState({});

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    useEffect(() => {
        const animateImage = () => {
            const randomY = Math.random() * 100 - 40; // Increased range (-20px to +20px)
            setAnimationStyle({
                transform: `translateY(${randomY}px)`,
                transition: "transform 1.5s ease-in-out",
            });
        };

        const interval = setInterval(animateImage, 1000); // Adjust interval for smoothness
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section
            className="banner bg-gradient-to-r py-60 mt-16"
            id="home"
        >
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                {/* Banner Content */}
                <div className="lg:w-7/12 text-center lg:text-left">
                    <div
                        className="animate-fadeIn"
                        style={{animation: "fadeIn 1s ease-in-out"}}
                    >
            <span className="block text-lg font-semibold uppercase mb-2">
              Welcome to my Portfolio
            </span>
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Hi! I'm Daria <br/>
                            <span className="txt-rotate text-pink-400">
                <span className="wrap">{text}</span>
              </span>
                        </h1>
                        <p className="text-sm md:text-base mb-6">
                            With a passion for building user-friendly web applications. Known
                            for crafting engaging user interfaces and solving complex
                            technical challenges with precision and efficiency.
                        </p>
                        <button
                            onClick={() => {
                                window.location.href = "#contact";
                            }}
                            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center"
                        >
                            Let’s Connect
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2 h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                       </ button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-5/12 mt-8 lg:mt-0 flex justify-center">
                    <div
                        className="animate-zoomIn"
                        style={{ animation: "zoomIn 1s ease-in-out" }}
                    >
                        <img
                            src={headerImg}
                            alt="Header Img"
                            className="w-full max-w-sm lg:max-w-md"
                            style={animationStyle} // Apply dynamic animation styles here
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;



