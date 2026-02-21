
interface Buttonprops {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    onClick?: () => void;
    loading?: boolean;
}
 
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-white"
}

const sizeStyles = {
    "sm": "px-2 py-1 text-sm",
    "md": "px-4 py-2 text-base",
    "lg": "px-6 py-3 text-lg"
}

export const Button = (props: Buttonprops) => {
    return ( 
        <div className="">
              <button 
            className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${props.loading ? "opacity-45" :""}  disabled=${props.loading} flex gap-3  rounded-lg`}
            onClick={props.onClick}
        >
        {props.text} 
        </button>
        </div>
      
    )
}