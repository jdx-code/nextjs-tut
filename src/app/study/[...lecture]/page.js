"use client"

const Lecture = ({params}) => {
    return(
        <div>
            <h1>Day : {params.lecture[0]} </h1>
            <h2>Lecture : {params.lecture[1]} </h2>
        </div>
    )
}

export default Lecture