const Heading = ({heading, text}) => {
    
    const Heading = 'h'+heading;
    
    if (parseInt(heading) < 1) {
        return (
            <h1>{text}</h1>
        )
    }

    if (parseInt(heading) > 6) {
        return (
            <h6>{text}</h6>
        )
    }
    
    return (
        <Heading>{text}</Heading>
    )
}

export default Heading;