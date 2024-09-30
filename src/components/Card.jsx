function Card(props) {
    return (
        <>
            <button onClick={() => window.location.href = "/menu"}>
                <div className="bg-slate-50/40 w-[12rem] h-[12rem] rounded-full mx-auto flex flex-col items-center justify-center gap-5 mt-16 hover:bg-slate-50/70 transition duration-300 ease-out hover:ease-in cursor-pointer shadow-lg">
                    <img src={props.src} alt="" />
                    <p className="text-white font-poppins">{props.name}</p>
                </div>
            </button>
        </>
    )
}

export default Card