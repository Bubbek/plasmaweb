import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import '../css/login.css'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

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

export default function Login(props) {
  const form = useRef()
  const checkBtn = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push('/profile')
          window.location.reload()
        },
        (error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

          setLoading(false)
          setMessage(resMessage)
        }
      )
    } else {
      setLoading(false)
    }
  }

  // const [isLoggedIn, setLoggedIn] = useState(false)
  // const [isError, setIsError] = useState(false)
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  // const {setAuthTokens} = useAuth()
  // const referer = props.location.state ? props.location.state.referer : '/'

  // const postLogin = () => {
  //   axios
  //     .post('https://crudcrud.com/api/0575dd6014c9435cbd8a9223dcb2b730/login', {
  //       userName,
  //       password,
  //     })
  //     .then((result) => {
  //       if (result.status === 200) {
  //         setAuthTokens(result.data)
  //         setLoggedIn(true)
  //       } else {
  //         setIsError(true)
  //       }
  //     })
  //     .catch((e) => {
  //       setIsError(true)
  //     })
  //   console.log(setAuthTokens())
  // }

  // if (isLoggedIn) {
  //   return <Redirect to={referer} />
  // }

  return (
    <Container>
      <Row style={{padding: '100px 0'}}>
        <Col></Col>
        <Card bg="dark" style={{width: '20rem'}}>
          <Card.Body>
            <Form onSubmit={handleLogin} ref={form}>
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
                  validations={[required]}
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
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading && <span className="spinner-border spinner-border-sm"></span>}
                  <span>Log in</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{display: 'none'}} ref={checkBtn} />
            </Form>
            <div style={{textAlign: 'center'}}>
              <Link to="/signup">Don't have an account?</Link>
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
    //         <Form onSubmit={handleLogin} ref={form}>
    //           <Form.Group controlId="username">
    //             <Form.Label style={{color: 'white'}}>Username</Form.Label>
    //             <Form.Control
    //               type="text"
    //               name="username"
    //               placeholder="username"
    //               value={username}
    //               onChange={onChangeUsername}
    //               validations={[required]}
    //             />
    //           </Form.Group>

    //           <Form.Group controlId="password">
    //             <Form.Label style={{color: 'white'}}>Password</Form.Label>
    //             <Form.Control
    //               type="password"
    //               name="password"
    //               placeholder="Password"
    //               value={password}
    //               onChange={onChangePassword}
    //               validations={[required]}
    //               required
    //             />
    //           </Form.Group>

    //           <Button variant="primary" disabled={loading} block>
    //             {loading && <span className="spinner-border spinner-border-sm"></span>}
    //             <span>Sign In</span>
    //           </Button>

    //           {message && (
    //             <div className="form-group">
    //               <div className="alert alert-danger" role="alert">
    //                 {message}
    //               </div>
    //             </div>
    //           )}
    //           <CheckButton style={{display: 'none'}} ref={checkBtn} />
    //         </Form>

    //         <Link to="/signup">Don't have an account?</Link>
    //         {/* {isError && (
    //           <Alert variant="danger" className="mt-3">
    //             Wrong username or password!
    //           </Alert>
    //         )} */}
    //       </Card.Body>
    //     </Card>
    //     <Col></Col>
    //   </Row>
    // </Container>
  )
}
