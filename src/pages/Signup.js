import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import '../css/login.css'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import {isEmail} from 'validator'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
// import Alert from 'react-bootstrap/Alert'
// import {useAuth} from '../helpers/auth.js'
// import {register, login, logout, getCurrentUser} from '../services/auth.service'
import * as AuthService from '../services/auth.service'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    )
  }
}

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}

export default function Signup(props) {
  const form = useRef()
  const checkBtn = useRef()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleRegister = (e) => {
    e.preventDefault()

    setMessage('')
    setSuccessful(false)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message)
          setSuccessful(true)
        },
        (error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

          setMessage(resMessage)
          setSuccessful(false)
        }
      )
    }
  }

  // const [isSignup, setSignup] = useState(false)
  // const [isError, setIsError] = useState(false)
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  // const {setAuthTokens} = useAuth()

  // function postSignup() {
  //   axios
  //     .post('https://crudcrud.com/api/0575dd6014c9435cbd8a9223dcb2b730/signup', {
  //       userName,
  //       password,
  //     })
  //     .then((result) => {
  //       if (result.status === 200) {
  //         setAuthTokens(result.data)
  //         setSignup(true)
  //       } else {
  //         setIsError(true)
  //       }
  //     })
  //     .catch((e) => {
  //       setIsError(true)
  //     })
  // }

  // if (isSignup) {
  //   return <Redirect to="/login" />
  // }

  return (
    <Container>
      <Row style={{padding: '100px 0'}}>
        <Col></Col>
        <Card bg="dark" style={{width: '20rem'}}>
          <Card.Body>
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label style={{color: 'white'}} htmlFor="username">
                      Username
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{color: 'white'}} htmlFor="email">
                      Email
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{color: 'white'}} htmlFor="password">
                      Password
                    </label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={successful ? 'alert alert-success' : 'alert alert-danger'}
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{display: 'none'}} ref={checkBtn} />
            </Form>

            <div style={{textAlign: 'center'}}>
              <Link to="/login">Already have an account?</Link>
            </div>
          </Card.Body>
        </Card>
        <Col></Col>
      </Row>
    </Container>

    // <Container>
    //   <Row style={{padding: '100px 0'}}>
    //     <Col></Col>
    //     <Card bg="dark" style={{width: '20rem'}}>
    //       <Card.Body>
    //         <Form>
    //           <Form.Group controlId="formBasicEmail">
    //             <Form.Label style={{color: 'white'}}>Email</Form.Label>
    //             <Form.Control
    //               type="username"
    //               value={userName}
    //               onChange={(e) => {
    //                 setUserName(e.target.value)
    //               }}
    //               placeholder="email"
    //               required
    //             />
    //           </Form.Group>

    //           <Form.Group controlId="formBasicPassword">
    //             <Form.Label style={{color: 'white'}}>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               value={password}
    //               onChange={(e) => {
    //                 setPassword(e.target.value)
    //               }}
    //               placeholder="Password"
    //               required
    //             />
    //           </Form.Group>

    //           <Form.Group controlId="formBasicPassword2">
    //             <Form.Label style={{color: 'white'}}>Re-enter Password</Form.Label>
    //             <Form.Control
    //               type="re-enter password"
    //               value={password}
    //               onChange={(e) => {
    //                 setPassword(e.target.value)
    //               }}
    //               placeholder="Password"
    //               required
    //             />
    //           </Form.Group>

    //           <Button onClick={postSignup} variant="primary" block>
    //             Sign Up
    //           </Button>
    //         </Form>
    //         <Link to="/login">Already have an account?</Link>
    //         {isError && (
    //           <Alert variant="danger" className="mt-3">
    //             Wrong username or password!
    //           </Alert>
    //         )}
    //       </Card.Body>
    //     </Card>
    //     <Col></Col>
    //   </Row>
    // </Container>
  )
}
