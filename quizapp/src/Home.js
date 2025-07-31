import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Css/Home.css";

function Home() {

    const [formdata, setformdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: ''
    });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setformdata({
            ...formdata,
            [name]: value,
        });
    };
    const handleSave=(e)=>{
        e.preventDefault();
        console.log("Form Data is",formdata);
    }

    return (

        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Register
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter First Name"
                                        name='firstname'
                                        value={formdata.firstname} />
                                </div>
                                <div className='mb-3'>
                                    <input type='text'
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Enter Last Name"
                                        name='lastname'
                                        value={formdata.lastname} />
                                </div>
                                <div className='mb-3'>
                                    <input type='text'
                                       onChange={handleChange}
                                        className='form-control'
                                        placeholder='Enter Email'
                                        name='email'
                                        value={formdata.email} />
                                </div>
                                <div className='mb-3'>
                                    <input type='text'
                                        onChange={handleChange}
                                        className='form-control'
                                        placeholder='Enter Phone'
                                        name='phone'
                                        value={formdata.phone} />
                                </div>
                                <div className='mb-3'>
                                    <input type='text'
                                        onChange={handleChange}
                                        className='form-control'
                                        name='gender'
                                        placeholder='Enter Gender'
                                        value={formdata.gender} />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home