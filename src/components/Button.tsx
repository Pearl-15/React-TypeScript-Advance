import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    el: 'anchor';
} & ComponentPropsWithoutRef<'a'>

export default function Button( props: ButtonProps | AnchorProps){

    // link element
    if(props.el === 'anchor'){
        return <a className="button" {...props}></a> // destructure props to catch built in/default anchor html props
    }

    return (
        <button className="button" {...props}></button>
    )
}