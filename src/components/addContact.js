import { useState } from "react";
export const AddContact=(props)=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
         props.onAddingContact(name,email,phone);
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <label>email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Phone</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}/> 
            <button type="submit">Submit</button>
        </form>
    )
}