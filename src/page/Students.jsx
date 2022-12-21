import React, {useState}  from 'react';
import Student from '../Data';
import Table from '../components/Table';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';

const Students = () => {
    const navigate = useNavigate();
    const AddStudent = () => {
        navigate('/Students/Additem');
    }

    const [Students, setStudents] = useState(Student)
    const [isEdit, setIsEdit] = useState(false);
    const [StudentId, setStudentId] = useState(null);

    const [edit, setEdit] = useState({
        Name: "",
        Age: "",
        Course: "",
        Batch:""
    })
    function handleChange(e) {
        setEdit({
            ...edit,[e.target.name]: e.target.value
        })
    }
    function changeEdit(student) {
        if (student.id === edit.id) {
          setIsEdit(isEdit => !isEdit)
        } else if (isEdit === false) {
          setIsEdit(isEdit => !isEdit)
        }
    }
    function captureEdit(e, clickedstudent) {
        e.preventDefault();
        setStudentId(clickedstudent.id);

        const inputFieldValues = {
            Name: clickedstudent.Name ,
            Age: clickedstudent.Age ,
            Course: clickedstudent.Course ,
            Batch: clickedstudent.Batch ,
        }
        setEdit(inputFieldValues);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedStudentData = {
            id: StudentId,
            Name: edit.Name ,
            Age: edit.Age ,
            Course: edit.Course ,
            Batch: edit.Batch
        }

        const UpdateStudents = [...Students];
        const index = Students.findIndex((student)=>student.id === StudentId);
        UpdateStudents[index] = updatedStudentData;
        setStudents(UpdateStudents)
        setStudentId(null);
        setIsEdit(false);
    }
    const handleCancel = () => {
        setIsEdit(false);
    }
    return (
        <div>
            {isEdit ?
            (<Edit edit={edit} handleChange={handleChange} handleCancel={handleCancel} handleUpdate={handleUpdate}/>) : (
            <>
                <header className='head'>
                    <h2>Student Details</h2>
                    <button className='btn' onClick={AddStudent}>Add new student</button>
                </header>
                <center>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Students.map((item) => (
                            <tr key={item.id}>
                                <Table student={item} 
                                captureEdit={captureEdit}
                                changeEdit={changeEdit} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                </center>
            </>
            )}
        </div>
    );
}

export default Students;