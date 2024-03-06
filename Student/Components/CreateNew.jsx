import React, { useState } from 'react'

import ViewAll from './ViewAll';
import { NavLink, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { createPost, getStudentById } from '../service/Service';

export default function CreateNew() {
    let navigate = useNavigate();
    const initialFormData = Object.freeze({
        id:"",
        name: "",
        age: ""
    });

    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age || !formData.id  ){
           alert("Input values missing.");
           return;
        }

        const postToCreate = {
            id: formData.id,
            name: formData.name,
            age: formData.age
          
        };
        try{
            const createStudent=await createPost(postToCreate);
           
          
        }
        catch{
            alert("Internal Error");
        }
        navigate("/view_all"); 
           
            
    };
    
    return (
        <>
        <form className="w-100 px-5">
           
            <h1 className="mt-5">Create new Student</h1>
            
            <div className="mt-5">
                <label className="h3 form-label">Student Id</label>
                <input value={formData.id} name="id" type="int" className="form-control" onChange={handleChange} required />
            </div>

            <div className="mt-5">
                <label className="h3 form-label">Student Name</label>
                <input value={formData.name} name="name" type="text" className="form-control" onChange={handleChange}  required />
            </div>

            <div className="mt-4">
                <label className="h3 form-label">Student Age</label>
                <input value={formData.age} name="age" type="text" className="form-control" onChange={handleChange}  required />
            </div>
            
        <button onClick={handleSubmit} className="btn btn-dark btn-lg w-100 mt-5">Submit</button>
        </form>
        </>
    );
}
