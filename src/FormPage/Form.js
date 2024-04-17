import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/success', { state: { name, surname } });
    }

    return (
        <div>
            <form className="App-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nom :</label>
                <input id="name" type="text" onChange={e => setName(e.target.value)} required />
                <label htmlFor="surname">Prenom :</label>
                <input id="surname" type="text" onChange={e => setSurname(e.target.value)} required />
                <button type="submit" >Valider</button>
            </form>
        </div>
    )
}

export default Form