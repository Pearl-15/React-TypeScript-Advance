import {type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;
// type of build in html elements "input" 

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {label, id, ...props},
    ref
){
    // ...props represent existing/build in HTML props that catch from "input" in this case
    return(
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} ref={ref}></input>
        </p>
    )
})

export default Input;