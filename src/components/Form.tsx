import { ComponentPropsWithoutRef, type FormEvent, useImperativeHandle, useRef, forwardRef } from "react"

export type FormHandle = {
    clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void; // we don't in advance type of "onSave"
};

const Form = forwardRef<FormHandle, FormProps>(function Form( 
    {onSave, children, ...otherProps}, 
    ref){

    const form = useRef<HTMLFormElement>(null);   // ref for form
    
    // clear form
    useImperativeHandle(ref, () => {
        return{
            // return method
            clear(){
                console.log("CLEARING .... ");
                // if current have value then reset the form
                form.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        console.log("formData : ", formData);

        const data = Object.fromEntries(formData);
        console.log("data : ", data);

        onSave(data);  
        
        // reset the form (Expose clear form method / api so that parent component can call)


    }
    return(
        <form {...otherProps} onSubmit={handleSubmit} ref={form}>
          {children}
        </form>
    )
})

export default Form;