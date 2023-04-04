import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token){
            setIsLogin(true)
        }
    },[window.localStorage.getItem('token')]);

    return (
        <div className="navbar-container flex">
            <div>
                <a href="/">My Book Library</a>
            </div>
            <div>
                {isLogin && (
                    <Link to={'/newbook'}>
                        <button>Create Book</button>
                    </Link>
                )}
                {!isLogin ? (
                    <Link to={'/login'}>
                        <button>Login</button>
                    </Link>
                ) : (
                    <button onClick={() => {
                        window.localStorage.removeItem('token');
                        setIsLogin(false);
                        navigate('/')
                    }}>Log Out</button>
                )}
            </div>
        </div>
    );
}