"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        };

        window.addEventListener("scroll", updateScrollCompletion);
        return () => window.removeEventListener("scroll", updateScrollCompletion);
    }, []);

    return (
        <div className="fixed top-[64px] left-0 w-full h-[3px] z-50 pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-teal-500 via-teal-400 to-purple-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] transition-all duration-150 ease-out"
                style={{ width: `${completion}%` }}
            />
        </div>
    );
}
