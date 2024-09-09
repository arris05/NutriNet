function Card(props) {
    return (
        <>
            <div>
                <img src={props.src} alt="" />
                <p>{props.name}</p>
            </div>
        </>
    )
}

export default Card