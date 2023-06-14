import React from "react"
import Label from "../../atoms/Label";
import Input from "../../atoms/Input";

export default function InputForm(props) {
    const {label,htmlFor,name,type,placeholder,colspan=""}=props;
    return (
        <div className={`col-span-full ${colspan}`}>
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
  )
}
