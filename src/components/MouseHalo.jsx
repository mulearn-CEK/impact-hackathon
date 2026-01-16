import { useState, useEffect } from 'react';

function MouseHalo() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 transition-transform duration-100 ease-out"
            style={{
                background: 'radial-gradient(circle, rgba(0,210,230,0.4) 0%, rgba(0,210,230,0.1) 40%, transparent 70%)',
                left: mousePos.x - 200,
                top: mousePos.y - 200,
            }}
        />
    );
}

export default MouseHalo;
