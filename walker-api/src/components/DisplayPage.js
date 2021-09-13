import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';


const DisplayPage = () => {
    const {category, id}= useParams();

    const [info, setInfo] = useState({});

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res=>{
            console.log("THIS IS THE RESSSSSS", res)
            setInfo(res.data);
        })
        .catch(err=> console.log(err));
    },[id])

    return (
        <div>
        {category ==="people"?
        <>
            <h1>You're looking at information about {category} with an id of {id}.</h1>
            <h1>{info.name}</h1>
            <h3>Height: {info.height} cm</h3>
            <h3>Mass: {info.mass} kg</h3>
            <h3>Gender: {info.gender}</h3>
        </>:
            category==="planets"?
        <>
            <h1>You're looking at information about {category} with an id of {id}.</h1>
            <h1>{info.name}</h1>
            <h3>Climate: {info.climate} </h3>
            <h3>Terrain: {info.terrain} </h3>
            <h3>Population: {info.population}</h3>
        </>:
            category === "films"?
            <>
            <h1>You're looking at information about {category} with an id of {id}.</h1>
            <h1>{info.title}</h1>
            <h3>Director: {info.director} </h3>
            <h3>Producer: {info.producer}</h3>
            <h3>Release Date: {info.release_date}</h3>
        </>:
            category === "starships"?
            <>
            <h1>You're looking at information about {category} with an id of {id}.</h1>
            <h1>{info.name}</h1>
            <h3>Model: {info.model}</h3>
            <h3>Manufacturer: {info.manufacturer} </h3>
            <h3>Passengers allowed: {info.passengers}</h3>
        </>:
            category === "species"?
            <>
            <h1>You're looking at information about {category} with an id of {id}.</h1>
            <h1>{info.name}</h1>
            <h3>Model: {info.model}</h3>
            <h3>Manufacturer: {info.manufacturer} </h3>
            <h3>Passengers allowed: {info.passengers}</h3>
        </>:
            <h1>This is not the page you're looking for..</h1>
        }
        </div>
    );
};


export default DisplayPage;