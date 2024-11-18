import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never; 
    // href? means optional no need to pass as a props if pass then value is nothing never
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
    // href? means optional no need to pass as a props if pass then value is must be string

}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps{
    // input parameters and type => (props: ButtonProps | AnchorProps)
    // output return value and type => props is AnchorProps => means if output return value is "true" then is is a type of "AnchorProps"

    // to check if in the props include "href" props , it's like to find key "href" in the "props"
    return 'href' in props;
};


export default function Button( props: ButtonProps | AnchorProps){

    // link element - so here typescript will automatically know if the "props" are "anchor" props then it will return anchor link
    if(isAnchorProps(props)){
        return <a className="button" {...props}></a> // destructure props to catch built in/default anchor html props
    }

    return (
        <button className="button" {...props}></button>
    )
}