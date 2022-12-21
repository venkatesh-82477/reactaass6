import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Student from '../Data';

const Additem = () => {
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Course, setCourse] = useState('');
    const [Batch, setBatch] = useState('');

    const handleChange = (e) => {
        const field = e.target.getAttribute("name");
        const val = e.target.value;
        if(field==='Name'){setName(val)}
        else if(field==='Age'){setAge(val)}
        else if(field==='Course'){setCourse(val)}
        else{setBatch(val)}
    }

    const cancelStudent = () => {
        navigate('/Students');
    }

    const submitStudent = () => {
        const newStudent = {
            "id": `${Student.length}`,
            "Name": `${Name}`,
            "Age": `${Age}`,
            "Course": `${Course}`,
            "Batch": `${Batch}`,
            "Change": "Edit"
        }
        Student.push(newStudent);
        navigate('/Students');
    }

    return (
        <>
            <div className='b'>
                <div className='head'>
                    <input type="text" name="Name" className='in' placeholder='Name' value={Name} onChange={handleChange} />
                    <input type="text" name="Age" className='in' placeholder='Age' value={Age} onChange={handleChange} />
                    <input type="text" name="Course" className='in' placeholder='Course' value={Course} onChange={handleChange} />
                    <input type="text" name="Batch" className='in' placeholder='Batch' value={Batch} onChange={handleChange} />
                </div>
            </div>
            <div className='button'>
                <button className='btn1' onClick={cancelStudent} style={{backgroundColor:'grey',color:"white"}}>Cancel</button>
                <button className='btn1' onClick={submitStudent}>Submit</button>
            </div>
        </>
    );
}

export default Additem;