import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Nav = () =>
{
    return (
        <div>
            <Navbar style={{ backgroundColor: "gray" }}>
                <Container >
                    <Navbar.Brand style={{ color: "white" }}>Users</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/adduser`} ><Button>Add User</Button></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Nav
