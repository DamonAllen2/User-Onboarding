import React from "react"


export default function Form(props) {
    const { onChange, submit, errors } = props;
    const { fullname, email, password, tos } = props.formValues;

    const change = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === 'checkbox' ? checked : value;
        onChange(name, newValue)
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    
    return(
    <div className="form">
        <h4 style={{color: 'red'}}>{errors.fullname}</h4>
        <h4 style={{color: 'red'}}>{errors.email}</h4>
        <h4 style={{color: 'red'}}>{errors.password}</h4>
        <h4 style={{color: 'red'}}>{errors.tos}</h4>
        <form onSubmit={onSubmit}>
            <label>Name:
             <input
                type='text'
                name='fullname'
                value={fullname}
                onChange={change}
            />
            </label>
            <label>Email:
             <input 
                type='email'
                name='email'
                value={email}
                onChange={change}
             />
            </label>
            <label>Password:
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={change}
                />
            </label>
            <label>By checking this you agree to the Terms of Service
                <input 
                    type='checkbox'
                    name='tos'
                    checked={tos}
                    onChange={change}
                />
            </label>
            <input type='submit' value='Add a user' />
        </form>
    </div>
    )
}