interface inputprops{
    placeholder? : string;
}

export function Input({ placeholder} : inputprops ){
    return(
        <div>
            <input type="text" placeholder={placeholder} onChange={onchange} className="px-4 py-2 box-border shadow-md" />
        </div>
    )
}