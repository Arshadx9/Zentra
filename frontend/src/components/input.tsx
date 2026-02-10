import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, ...props }, ref) => {
        return (
            <div>
                <input
                    ref={ref}
                    type="text"
                    placeholder={placeholder}
                    className="px-4 py-2 box-border shadow-md"
                    {...props}
                />
            </div>
        );
    }
);