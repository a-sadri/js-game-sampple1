import { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBValidationItem,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formvalue, setFormvalue] = useState(initialState);
  const { email, password } = formvalue;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
    // e.preventDefault();
  };

  return (
    <div
      style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '450px',
        alignContent: 'center',
        marginTop: '120px',
      }}
    >
      <MDBCard alignment='center'>
        <MDBIcon fas icon='user-circle' className='fa-2x' />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
            <MDBValidationItem feedback='Please provide your email' invalid>
              <div className='col-md-12'>
                <MDBInput
                  label='Email'
                  type='email'
                  value={email}
                  name='email'
                  onChange={onInputChange}
                  required
                />
              </div>
            </MDBValidationItem>

            <MDBValidationItem invalid feedback='Please provide your password'>
              <div className='col-md-12'>
                <MDBInput
                  label='Password'
                  type='password'
                  value={password}
                  name='password'
                  onChange={onInputChange}
                  required
                />
              </div>
            </MDBValidationItem>

            <div className='col-12'>
              <MDBBtn style={{ width: '100%' }} className='mt-2'>
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to='/register'>
            <p>Don't have an account? Sign Up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Login;
