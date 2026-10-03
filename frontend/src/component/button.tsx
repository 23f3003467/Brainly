const variants = {
    "primary": "bg-purple-300 hover:bg-purple-300",
    "secondary": "bg-purple-500 hover:bg-purple-400",
    "danger": "bg-red-500 rounded hover:bg-red-600",
};

// 1st thing first thing first define how your props would look like
// and then define your component function and 
// then return the button with the props you defined in the interface.
const defaultStyles= "px-4 py-2 mx-1 rounded text-white font-light flex items-center gap-1 border border-slate-400 text-center"
export interface buttonProps {
    variant: keyof typeof variants; // this means the variant prop can
    //  only be one of the keys in the variants object variant:string would give error on line 20 because it can be any string but we want to restrict it to only the keys in the variants object
    text: string;
    StartIcon?: React.ReactNode;
    EndIcon?: React.ReactNode;
    fullwidth?:Boolean;
    onClick?:(any:any)=>any;
    loading?:boolean;
    disabled?:boolean
    cursor?:boolean

}

export function Button(props: buttonProps) {
    const { variant, text, StartIcon, EndIcon, fullwidth, onClick, loading ,cursor} = props;

    return (
        <button
            className={`${variants[variant]} ${defaultStyles} ${fullwidth ? "w-full flex justify-center" : ""} ${loading ? "opacity-50 cursor-not-allowed" : ""} ${cursor ? "cursor-pointer" : "" }`}
            onClick={onClick}
            disabled={loading}
        >
            {StartIcon}
            {text}
            {EndIcon}
        </button>
    );
}

export default Button;