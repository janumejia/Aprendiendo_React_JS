import React, { Fragment } from 'react'
import { Part } from './Part'

// Del Ejercicio 1.1
// export const Content = ({part, exercise}) => {
//     return (
//         <Fragment>
//             <p>{part} {exercise}</p>
//         </Fragment>
//     )
// }

// Del Ejercicio 1.2
export const Content = ({ content }) => {

    const listContent = content.map((item) =>
        <Part part={item.part} exercise={item.exercise} />
    )

    return (
        <Fragment>
            {listContent}
        </Fragment>
    )
}