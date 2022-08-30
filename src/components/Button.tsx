import { motion } from "framer-motion";
import React from "react";
import tw from "tailwind-styled-components";

const ButtonElem = tw(motion.button)`
    bg-blue-500
    text-white
    px-3.5
    py-2.5
    m-3
    rounded-xl
    shadow-xl
    font-bold
    tracking-tight
`;

export default function Button({ children }: {
    children: React.ReactNode;
}) {
    return (
        <ButtonElem
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </ButtonElem>
    )
}