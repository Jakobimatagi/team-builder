import React from 'react'


export default function MemberForm(props){

const { values, update, submit } = props


const onChange = evt => {
    const {name, value} =evt.target
    update(name,value)
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}
return (
    <form onSubmit={onSubmit}>
        <label>Username
            <input type='text' name='username' onChange={onChange} value={values.username}></input>
        </label>
        <label>Email
            <input type='email' name='email' onChange={onChange} value={values.email}></input>
        </label>
        <label>Role
            <select name='role' value={values.role} onChange={onChange}>
                <option value='frontEnd'>Front End</option>
                <option value='backEnd'>Back End</option>
                <option value='uxDesign'>Design</option>
            </select>
        </label>

        <div className='submit'>
            <button>Submit</button>
        </div>
    </form>
    
)
}