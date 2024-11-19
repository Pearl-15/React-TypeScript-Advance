import {type ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;
// type of build in html elements "input" 

export default function Input({label, id, ...props}: InputProps){
    // ...props represent existing/build in HTML props that catch from "input" in this case
    return(
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props}></input>
        </p>
    )
}