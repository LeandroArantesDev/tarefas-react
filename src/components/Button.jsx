function Button(props) {
    return (
        <>
            <button {...props} className="bg-violet-400 text-stone-50 flex justify-center items-center py-1.5 px-1 gap-1 lg:px-5 lg:gap-2 rounded-lg">{props.children}</button>
        </>
    )
}

export default Button;