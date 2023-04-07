import {useState, useEffect} from "react";
import "../styles/Card.css";

export function Card(props){
    
    const [profil, setProfil] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/abouba03")
        .then(reponse => reponse.json())
        .then(data => setProfil(data))
    }, [])
   
    return (
        <div className="card">
            <div className="card-header">
                <img src={profil.avatar_url} alt="avatar"></img>
                <h3>{profil.login}</h3>
            </div>
        </div>
    );
}