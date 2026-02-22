
interface Buttonprops {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    onClick?: () => void;
    loading?: boolean;
}
 
const variantStyles = {
    primary: `bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-700
 
            border-zinc-500
            ring-1 ring-inset ring-white/5
            text-white
            focus:outline-none focus:ring-2 focus:ring-zinc-400/30
            shadow-lg shadow-black/40
            font-medium rounded-lg text-sm px-4 py-2.5 leading-5
            transition-all duration-300`,
    "secondary": `bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center text-white leading-5`
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