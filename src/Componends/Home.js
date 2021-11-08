import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../Context/Context';
import Nav from './Nav';
import { Navbar, Container, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Home.css";

export const Home = () =>
{
    const { users, RemoveUser } = useContext(Profile);
    // console.log(users);
    return (
        <div>
            <Nav />
            {users.length > 0 ? (
                <>
                    {users.map((data) =>
                    {
                        return (
                            <div className="Detail" key={data.id}>
                                {/* <h1>{data.id}</h1> */}
                                <h2>{data.name}</h2>
                                <Link style={{ color: "white", textDecoration: "none" }} to={`/edit/${data.id}`} ><Button>Edit</Button></Link>
                                <Button onClick={() => RemoveUser(data.id)} variant="danger">Delete</Button>
                            </div>
                        )
                    })}
                </>
            ) : <h2>No User</h2>}

            {/* <span>Home</span> */}
        </div>
    )
}
