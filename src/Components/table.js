import React from "react";

const Table = (props) => {
    return (
        <>
            <table className={`table ${props.styleClass}`}>
                <thead>
                    <tr>
                        {props.dataHeadings.map((item, key) => (
                            <th scope="col" key={key}>{item.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.data.map((item, key) => (
                            <td key={key}>{item.content}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;