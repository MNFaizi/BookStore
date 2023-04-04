import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate;
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPass){
            return;
        }
        try{

        }
        catch{

        }
    }

    return (
        <div>
            Register Page
        </div>
    )
}