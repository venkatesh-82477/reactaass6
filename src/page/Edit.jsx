import React from 'react';

const Edit = ({ edit, handleUpdate, handleChange, handleCancel }) => {
    let {Name, Age, Course, Batch} = edit

    return (
        <>
            <div className='b'>
                <div className='head'>
                    <input type="text" name="Name" className='in' value={Name} onChange={handleChange} />
                    <input type="text" name="Age" className='in ' value={Age} onChange={handleChange} />
                    <input type="text" name="Course" className='in ' value={Course} onChange={handleChange} />
                    <input type="text" name="Batch" className='in ' value={Batch} onChange={handleChange} />
                </div>
            </div>
            <div className='button'>
                <button className='btn2' onClick={handleCancel} style={{backgroundColor:'pink'}}>Cancel</button>
                <button className='btn2' onClick={handleUpdate}>Update</button>
            </div>
        </>
    );
}

export default Edit;