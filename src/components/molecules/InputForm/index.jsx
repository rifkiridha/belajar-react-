import React from "react"
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";
import { forwardRef } from "react";

const  InputForm = forwardRef((props,ref)=>{
    const {label,htmlFor,name,type,placeholder}=props;
    return (
        <div className="mb-6">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
        </div>
  )
})

export default InputForm;