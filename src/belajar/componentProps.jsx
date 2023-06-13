import React from "react"

// nested component

function Button(){
    return <button className="h-10 px-6 font-semiblod rounded-md bg-black text-white">button</button>
}

const Button2 = (props) => {
    return <button className={`h-10 px-6 font-semiblod rounded-md ${props.color} text-white`}>{props.text}</button>

}

const Button3 = (props) => {
    const {color="bg-black",children}=props;
    return <button className={`h-10 px-6 font-semiblod rounded-md ${color} text-white`}>{children}</button>

}


export const ComponentProps = () => {
  return (
    <>
    <div className="flex justify-center items-center mb-8">
        <h1 className="text-5xl font-bold text-center">Welcome!</h1>
    </div>
    <div className="flex justify-center intems-center gap-x-4">
        <button className="h-10 px-6 font-semiblod rounded-md bg-black text-white">button</button>
        <button className="h-10 px-6 font-semiblod rounded-md bg-gray-300 text-black">button</button>
        <Button/>
        <Button2 color="bg-blue-500" text="Login bre"/>
        <Button3>logout <span>yes</span></Button3>
        <Button3>Logout</Button3>
    </div>
</>
  )
}

export default ComponentProps