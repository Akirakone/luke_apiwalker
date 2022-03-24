import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Findone = (props) => {
    const history = useHistory();
    const [categories, setCategories] = useState("");
    const [id, setId] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push(`/${categories}/${id}`)
}
    return (
            <div >
                <form onSubmit={onSubmitHandler} >
                    <div>
                        <label> Search For: </label>
                        <select onChange={(event) =>  setCategories(event.target.value)}>
                            <option hidden selected disabled>Pick One</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                        </select>
                    </div>
                    <div>
                        <label>Id: </label>
                        <input type="number" onChange={(event)=>setId(event.target.value)} />
                    </div>
                    <input type='Submit' id='button' />
                </form>
            </div>
            )
    }


export default Findone;