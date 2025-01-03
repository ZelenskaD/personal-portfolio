import React, { useEffect, useState } from "react";

const Background = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    // Generate random stars
    useEffect(() => {
        const newStars = Array.from({ length: 100 }, () => ({
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
        }));
        setStars(newStars);

        // Generate meteorites with random directions and delays
        const newMeteors = Array.from({ length: 7 }, () => ({
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            delay: `${Math.random() * 5}s`,
        }));
        setMeteors(newMeteors);
    }, []);

    return (
        <div className="background">
            {/* Render stars */}
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="stars"
                    style={{ top: star.top, left: star.left }}
                ></div>
            ))}

            {/* Render meteorites */}
            {meteors.map((meteor, index) => (
                <div
                    key={index}
                    className="meteor"
                    style={{
                        top: meteor.top,
                        left: meteor.left,
                        animationDelay: meteor.delay,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Background;
