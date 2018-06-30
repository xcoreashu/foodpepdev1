import React from 'react';
import { Input } from 'mdbreact';
export default ({ input ,label,meta: { error , touched } }) => {
  return (
    <div>
    <label>{label}</label>
    <Input {...input} style = {{marginBottom: '5px' }} />
    <div className = "red-text" style = {{ marginBottom: '20px' }}>
    {touched && error}
    </div>
    </div>
  );
};
