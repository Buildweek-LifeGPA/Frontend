import React from 'react';

const FormInfo = props => {
    // console.log(props);
    return (
        <div className="form-list">
            {props.formsList.map(form => {
                return (
                    <div className="form" key={form.id}>
                        <p>{form.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FormInfo;