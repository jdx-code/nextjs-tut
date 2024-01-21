import Link from "next/link"

const StudentList = () => {

    const studentArr = [
        {
            id: '1',
            name: 'Joe',
            email: 'joe@gmail.com'
        },
        {
            id: '2',
            name: 'Phil',
            email: 'phil@gmail.com'
        },
        {
            id: '3',
            name: 'Matt',
            email: 'matt@gmail.com'
        },
    ]

    return(
        <div>
            <h2>Student List</h2>
            <ul>
                {studentArr.map(student => {
                    return(
                        <li>
                            <Link href={`/studentlist/${student.name}`}>
                                {student.name}
                            </Link>
                        </li>     
                    )                
                })}
            </ul>            
        </div>
    )
}

export default StudentList