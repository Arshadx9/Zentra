interface inputprops{
    placeholder? : string;
    ref : any;
}

export function Input({ placeholder ,ref}  : inputprops ){
    return(
        <div>
            <input ref={ref} type="text" placeholder={placeholder} className="px-4 py-2 box-border shadow-md" />
        </div>
    )
}