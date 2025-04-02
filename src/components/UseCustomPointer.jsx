//Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.
//
//Cosa deve fare?
//
//    Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
//    Posiziona il componente al posto del puntatore del mouse.
//    Il componente segue i movimenti del mouse.

import { useEffect, useState } from "react"


export default function useCustomPointer(customComponent) {
    const [customPointer, setCustomPointer] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const updateCursorPosition = (e) => {
            setCustomPointer({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', updateCursorPosition)

        return () => {
            window.removeEventListener("mousemove", updateCursorPosition);
        };
    }, [])

    const cursorStyle = {
        position: "absolute",
        left: `${customPointer.x}px`,
        top: `${customPointer.y}px`,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
    };

    return (
        <div style={cursorStyle}>
            {customComponent}
        </div>
    );
}