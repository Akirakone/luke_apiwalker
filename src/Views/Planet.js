import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planet = (props) => {
    const [planet, setPlanet] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data);
                setPlanet(response.data)
            })
            .catch(error => {
                console.log(error);
                setPlanet("");
            })
    }, [id]);

    
        return (
            <div>
                <div>
                    {planet.length <= 0 ? 
                    <h2>These are not the droids you're looking for</h2>
                    :
                    <div>
                        <h1>{planet.name}</h1>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Surface Water: {planet.surface_water}</p>
                        <p>Population: {planet.population}</p>
                    </div>
                        } 
                </div>
            </div>
        );
    
    

    
};

export default Planet;
            