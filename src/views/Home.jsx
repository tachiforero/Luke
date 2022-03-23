import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { simpleGets } from '../services/simpleGets';
import Row from "react-bootstrap/Row"

//QUEDA ARMAR LA URL PARA PASARSELA A SIMPLEGET

const Home = () => {

    
    const [selection,setSelection] = useState();

    const [id,setId] = useState();

    const onClick = async() =>{
        const response = await simpleGets("");
        console.log(response);
        // setPersonajes(response.results);
    }


    return (
        <div className='container'>
            <div>
            <Form onSubmit={onClick}>
                <Form.Select onChange={(e)=>setSelection(e.target.value)}aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </Form.Select>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>setId(e.target.value)} type="text" placeholder="Enter email" />
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
            </div>
            {/* <form>
                <label htmlFor="">Id </label>
                <input type="text" name="" id="" />
                <input type="submit" value="Search"/>
            </form> */}
            </div>
    );
}

export default Home;
