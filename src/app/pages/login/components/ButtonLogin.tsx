import React from "react";

interface IButtonLoginProps{
    onClick : () => void;
    type?: "button" | "submit" | "reset" ;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children})