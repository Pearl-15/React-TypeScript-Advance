import { ComponentPropsWithoutRef, type FormEvent } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void; // we don't in advance type of "onSave"
};

export default function Form( {onSave, children, ...otherProps}: FormProps){

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log("formData : ", formData);

        const data = Object.fromEntries(formData);
        console.log("data : ", data);
        
        onSave(data);    
    }
    return(
        <form {...otherProps} onSubmit={handleSubmit}>
          {children}
        </form>
    )
}