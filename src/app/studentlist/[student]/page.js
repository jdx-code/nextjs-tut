"use client"

const Student = ({params}) => {

    console.log(params)

    return (
        <div>
            <h1>Hi, {params.student}</h1>
        </div>
    )
}

export default Student