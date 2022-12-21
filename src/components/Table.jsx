import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({student, student:{Name, Age, Course, Batch}, captureEdit, changeEdit}) => {
    return (
        <>
            <td>{Name}</td>
            <td>{Age}</td>
            <td>{Course}</td>
            <td>{Batch}</td>
            <td>
                <Link
                onClick={(e)=>{captureEdit(e, student);changeEdit(student)}}> Edit
                </Link>
            </td>
        </>
    );
}

export default Table;