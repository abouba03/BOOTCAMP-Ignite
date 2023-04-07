import "../styles/RepositoryList.css";
import {useState, useEffect} from "react";

export function RepositoryList(props){
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/abouba03/repos")
        .then(reponse => reponse.json())
        .then(data => setRepositories(data))
    })

    return(
        <div className="RepositoryList">
            <h4>Os repositorios do usuario:</h4>
            <ul>
                <div className="lista-repos">
                {repositories.map(repo => (
                    <div className="card-repo borda" key={repo.id}>
                        <li className="Item">
                            <h3 className="title">{repo.name}</h3>
                            <a href={repo.html_url} target="_blank">Link do repository</a>
                        </li>
                    </div>
                ))}
                </div>
            </ul>
            
        </div>
    )
}