import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UserUpData = () => {

  const { id } = useParams()

  const [UserData, setUserData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`).then(res => setUserData(res.data)).catch((error) => console.log('error', error))
  }, [setUserData])


  const GetInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const data = { ...UserData, [name]: value }
    setUserData(data);
    console.log(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (UserData.firstName !== undefined && UserData.lastName !== undefined && UserData.username !== undefined && UserData.city !== undefined && UserData.state !== undefined && UserData.zip !== undefined && UserData.conditions !== undefined) {

      axios.put(`http://localhost:3000/user/${id}`, UserData).catch((err) => console.log('post data error : ' + err))
      setUserData({});

    }
  }
  console.log(UserData);
  return (
    <div className='py-5 border border-1 border-white m-5'>
      <Container>
        <Row>
          <Col>
            <Form noValidate onSubmit={(event) => handleSubmit(event)}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label className='text-white'>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name='firstName'
                    value={UserData.firstName}
                    placeholder="First name"
                    onChange={(e) => GetInputValue(e)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label className='text-white'>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name='lastName'
                    value={UserData.lastName}
                    placeholder="Last name"
                    onChange={(e) => GetInputValue(e)}

                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label className='text-white'>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      value={UserData.username}
                      aria-describedby="inputGroupPrepend"
                      required
                      name='username'
                      onChange={(e) => GetInputValue(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label className='text-white'>City</Form.Label>
                  <Form.Control type="text" placeholder="City" name='city' required onChange={(e) => GetInputValue(e)} value={UserData.city} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label className='text-white'>State</Form.Label>
                  <Form.Control type="text" placeholder="State" name='state' required onChange={(e) => GetInputValue(e)} value={UserData.state} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label className='text-white'>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" name='zip' required onChange={(e) => GetInputValue(e)} value={UserData.zip} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  name='conditions'

                  onChange={(e) => GetInputValue(e)}
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserUpData