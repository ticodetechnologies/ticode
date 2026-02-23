import { useEffect, useState } from "react";

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).getPropertyValue("cursor") === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            );
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <div
            className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
            }}
        >
            <div className={`h-8 w-8 rounded-full bg-brand-blue/30 blur-xl transition-all duration-300 ${isPointer ? 'bg-accent-cyan/40 blur-2xl h-12 w-12' : ''}`} />
        </div>
    );
};

export default CursorGlow;
