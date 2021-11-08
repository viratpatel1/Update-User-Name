import React, { useState, useContext, useEffect, useParams } from 'react';
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useHistory, useRouteMatch } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { Profile } from '../Context/Context';


export const EditUser = () =>
{
    const history = useHistory();
    const match = useRouteMatch();
    const { users, editUser } = useContext(Profile);
    // const [name, setName] = useState();
    const currentUserId = match.params.id;
    console.log(currentUserId)

    const [select, setSelect] = useState({
        id: "",
        name: ""
    });


    useEffect(() =>
    {
        const userId = currentUserId;
        const select = users.find(user => user.id === userId)
        setSelect(select)
    }, [currentUserId, users])

    const Submit = (e) =>
    {
        editUser(select)
        history.push("/");
    }

    const Change = (e) =>
    {
        setSelect({ ...select, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <>
                <Form onSubmit={Submit} >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Update Profile"
                        className="mb-3"
                    >
                        <Form.Control type="text" name="name" value={select.name} placeholder="Update Profile" onChange={Change} />
                        <Button type="submit">Update</Button>
                        <Link style={{ color: "white", textDecoration: "none" }} to={`/`} ><Button variant="danger">Cancel</Button></Link>
                    </FloatingLabel>
                </Form>
            </>
        </div>
    )
}

