import React, { useEffect, useState } from "react";

const MouseTrail = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newParticle = {
                id: Math.random(),
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
            };

            setParticles((prev) => [...prev, newParticle]);

            // Remove the particle after 700ms
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
            }, 700);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="particle"
                    style={{
                        top: particle.y,
                        left: particle.x,
                    }}
                ></div>
            ))}
        </>
    );
};

export default MouseTrail;

