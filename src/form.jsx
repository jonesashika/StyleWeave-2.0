import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Task1 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState('false')
    const formSave = (e) => {
        e.preventDefault()
        console.log('email', email);
        console.log('password', password);
    }
    const Check = (e) => {
        setChecked(e.target.checked)
        console.log(e.target.checked)
    }

// export const form = () => {
    return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" defaultChecked={checked} value={checked} onClick={Check} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={formSave}>
                Submit
            </Button>
        </Form>
    </div>
)
}
export default Task1
