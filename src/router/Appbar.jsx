import React from 'react';
import { Routes, Route } from "react-router-dom";
import Additem from '../page/Additem';
import Contact from '../page/Contact';
import Edit from '../page/Edit';
import Home from '../page/Home';
import Students from '../page/Students';

const Appbar = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Students" element={<Students />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Students/Additem" element={<Additem />} />
                <Route path="Students/Edit" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default Appbar;