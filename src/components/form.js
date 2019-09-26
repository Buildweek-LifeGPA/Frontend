import React, { useState } from 'react';

const MemberForm = props => {
    const [form, setForm] = useState({ name: ""});

    const changeHandler = event => {
        console.log(event.target.value);
        setForm({...form, [event.target.name]: event.target.value});
    };
    
    const submitForm = event => {
        event.preventDefault();
        const newMem = {
            ...form,
            id: Date.now()
        }
    props.addNewMem(newMem);
    setForm({name: ""});
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={changeHandler}
                />
        </form>
    );
};

export default MemberForm;