import { useState } from "react";
import { EditContactForm } from "./EditContactForm";

export function Contact (props) {
    const {contact}=props;
    const [isEditing,setIsEditing]=useState(false);
 
    const handleEdit=()=>{
     setIsEditing(true);

    }
    const handleUpdate=(updatedContact)=>{
        props.onUpdate(contact.id,updatedContact);
        setIsEditing(false);
    }
    const handleDelete=()=>{
        props.onDelete(contact.id);
    }
    const handleCancel=()=>{
        setIsEditing(false);
    }
    return (
        <div className="contact">
            {isEditing?
            (<EditContactForm
                contact={contact}
                onUpdate={handleUpdate}
                onDelete={handleCancel}
            />):
            (<div className="contact-card">
            <p className="field">{contact.name}</p>
            <p className="field">{contact.phone}</p>
            
            <button onClick={handleEdit} className="button">Edit </button>
            <button onClick={handleDelete} className="button">Delete</button>
            </div>)
            }
            
        </div>
    )
}