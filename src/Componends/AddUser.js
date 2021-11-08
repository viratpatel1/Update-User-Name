import React, { useState, useContext } from 'react';
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Profile } from '../Context/Context';

export const AddUser = () =>
{
    const [name, setName] = useState();
    const history = useHistory();
    const { addUser } = useContext(Profile)

    const Submit = (e) =>
    {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        history.push("/");
    }
    const Change = (e) =>
    {
        setName(e.target.value);
    }

    return (
        <div>
            <>
                <Form onSubmit={Submit} >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="User Name"
                        className="mb-3"
                    >
                        <Form.Control name="name" type="text" placeholder="User Name" onChange={Change} />
                        <Button type="submit">Add</Button>
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/`} ><Button variant="danger">Cancel</Button></Link>
                    </FloatingLabel>
                </Form>
            </>
        </div>
    )
}

