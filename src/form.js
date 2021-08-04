import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import useForm from './useForm'
import validateForm from './validateForm'
import { Form, Table } from "react-bootstrap";

function useUsers(){
    const [users, setUsers] = useState([])
     
     useEffect(() => {
       firebase
        .firestore()
        .collection('users')
        .onSnapshot((snapshot) => {
          const newUsers = snapshot.docs.map((user) => ({
            id: user.id,
            ...user.data()
          }))
          setUsers(newUsers)
        })
     },[])
    return users
  }
  
  const UserList = () =>{
    const users = useUsers()
    return(
        <div>
              <h3>Users List</h3>
             <h4>We have {users.length} users now</h4>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody>
      {users.map((user, i) => 
       <tr>
       <td>{i+1}</td>
       <td>{user.first_name}</td>
       <td>{user.last_name}</td>
       <td>{user.email}</td>
       <td>{user.number}</td>
     </tr>
      )}
  </tbody>
</Table>
        </div>
    )
  }

export default function Form1() {
    const {handleChange, handleSubmit, values, errors} = useForm(fireSubmit, validateForm)

    function fireSubmit(){
        const {email, 
               firstname, 
               lastname, 
               number,
               company_name,
               duration_company,
               facebook_bus,
               facebook_per,
               income,
               instagram_bus,
               instagram_per,
               linked_in,
               occupation,
               save_per_time,
               savings_plan,
               twitter_bus,
               twitter_per 
              } = values
        alert(`Your info has been collected`)
    
        firebase
         .firestore()
         .collection('users0')
         .add({
          company_name:  company_name,
          duration_company:  duration_company,
          email:  email,
          facebook_bus: facebook_bus,
          facebook_per:  facebook_per,
          first_name:  firstname,
          income:  income,
          instagram_bus: instagram_bus,
          instagram_per: instagram_per,
          last_name: lastname,
          linked_in:  linked_in,
          number:  number,
          occupation:  occupation,
          save_per_time:  save_per_time,
          savings_plan:  savings_plan,
          twitter_bus: twitter_bus,
          twitter_per:  twitter_per
         })
        }
    return (
        <div>
           
        < Form noValidate onSubmit={handleSubmit}>
        <h3>Register</h3>
        <p>Personal Information</p>
           <Form.Group>
                <Form.Control 
                name='firstname'
                type="text" 
                onChange={handleChange}
                value={values.firstname}
                placeholder="First Name" 
                required  />
                 {errors.firstname && <p className='error'>{errors.firstname}</p>}
            </Form.Group>
           <Form.Group>
                <Form.Control 
                name='lastname'
                type="text" 
                onChange={handleChange}
                value={values.lastname}
                placeholder="Last Name" 
                required  />
                 {errors.lastname && <p className='error'>{errors.lastname}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Control 
                name='email'
                type="email" 
                onChange={handleChange}
                value={values.email}
                placeholder="Email Address" 
                required  />
                {errors.email && <p className='error'>{errors.email}</p>}
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='number'
                type="tel" 
                onChange={handleChange}
                value={values.number}
                placeholder="Phone Number" 
                required />
                 {errors.number && <p className='error'>{errors.number}</p>}
            </Form.Group>
             <p>Social Media Handles(Personal)</p>
            <Form.Group >
                <Form.Control 
                name='twitter_per'
                type="text" 
                onChange={handleChange}
                value={values.twitter_per}
                placeholder="Twitter Handle" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='instagram_per'
                type="text" 
                onChange={handleChange}
                value={values.instagram_per}
                placeholder="Instagram Handle" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='facebook_per'
                type="text" 
                onChange={handleChange}
                value={values.facebook_per}
                placeholder="Facebook Handle" 
                required />
            </Form.Group>
            {/* additonal info*/}
            <p>Social Media Handles(Business)</p>
            <Form.Group >
                <Form.Control 
                name='twitter_bus'
                type="text" 
                onChange={handleChange}
                value={values.twitter_bus}
                placeholder="Twitter Handle" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='instagram_bus'
                type="text" 
                onChange={handleChange}
                value={values.instagram_bus}
                placeholder="Instagram Handle" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='facebook_bus'
                type="text" 
                onChange={handleChange}
                value={values.facebook_bus}
                placeholder="Facebook Handle" 
                required />
            </Form.Group>
            <p>Financial Info</p>
            <Form.Group >
                <Form.Control 
                name='occupation'
                type="text" 
                onChange={handleChange}
                value={values.occupation}
                placeholder="Occupation" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='company_name'
                type="text" 
                onChange={handleChange}
                value={values.company_name}
                placeholder="Company Name" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='duration_company'
                type="number" 
                onChange={handleChange}
                value={values.duration_company}
                placeholder="Duration at Company" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='income'
                type="text" 
                onChange={handleChange}
                value={values.income}
                placeholder="Monthly Income/Turnover" 
                required />
            </Form.Group>
            <p>Savings method</p>
            <Form.Group >
                <Form.Control 
                name='save_per_time'
                type="text" 
                onChange={handleChange}
                value={values.save_per_time}
                placeholder="How would you like to save" 
                required />
            </Form.Group>
            <Form.Group >
                <Form.Control 
                name='savings_plan'
                type="text" 
                onChange={handleChange}
                value={values.savings_plan}
                placeholder="Preferred Savings Plan" 
                required />
            </Form.Group>
            <button type='submit'>Submit</button>
        </Form>
        <UserList />
        </div>
    )
}

