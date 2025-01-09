import React, { useEffect, useState } from "react";

const MouseShine = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed", // Use fixed to avoid offset issues
                top: position.y,
                left: position.x,
                width: "10px", // Adjust size as needed
                height: "8px",
                pointerEvents: "none",
                borderRadius: "20px", // Slightly rounded for a shine effect
                background: "linear-gradient(90deg, rgba(138, 43, 226, 0.8), rgba(186, 85, 211, 0.3))", // Purple gradient
                boxShadow: "0 0 15px 5px rgba(138, 43, 226, 0.6)", // Purple glow
                transform: "translate(-50%, -50%)", // Center the shine under the cursor
                animation: "shineEffect 1.5s infinite ease-in-out",
            }}
        />
    );
};

export default MouseShine;

