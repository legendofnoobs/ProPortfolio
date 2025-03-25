import { useEffect, useState } from "react";

const CursorBlur = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed w-28 h-28 bg-blue-900/90 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 -z-10"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
};

export default CursorBlur;
