import React from 'react'
import {Formik} from 'formik' 
import * as Yup from 'yup'
import firebase from './firebase'

firebase.firestore().collection('users0').add({name: 'john'})

const validationSchema = Yup.object().shape({
   name: Yup.string()
   .min(1, 'Must have a character')
   .max(30, 'Name too Long')
   .required('Please fill in name'),
   company_name: Yup.string()
   .min(2, 'Please fill valid company name'),
   duration_company: Yup.number()
    .typeError('Must be a number')
    .min(2, 'Minimum duration of 2 months required'),
   email: Yup.string()
   .email('Invalid email address')
   .required('Your email is required'),
   number: Yup.string()
   .min(11, 'Invalid phone number')
   .max(11, 'Invalid phone number')
   .required('Please provide phone number'),
   occupation: Yup.string()
   .required('Please state occupation'),
   income: Yup.number()
     .min(200, 'Income too small')
     .required('This field is required'),
   save_per_time: Yup.string()
   .required('This field is required'),
   savings_plan: Yup.string()
   .required('This field is required'),
})
const Error = ({ touched, message}) =>{
    if(!touched){
        return <div className='feedback invalid'>&nbsp;</div>
    }if(message){
        return <div className='feedback invalid'>{message}</div>
    }
    return <div className='feedback valid'>Ok!</div>
}

export default function FormikForm() {
    return (
      <div>
        <Formik initialValues={
                       {name: "", 
                       company_name: "",
                       duration_company: 0,
                       email: "",
                       facebook_bus: "",
                       facebook_per: "",
                       income: 0,
                       instagram_bus: "",
                       instagram_per: "",
                       linked_in: "",
                       number: "",
                       occupation: "",
                       save_per_time: "",
                       savings_plan: "",
                       twitter_bus: "",
                       twitter_per: "" }
                    }
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) =>{
                    setSubmitting(true);

                    setTimeout(() => {
                        alert('Your info has been collected!')
                        firebase
                        .firestore()
                        .collection('users')
                        .add({ 
                          name: values.name, 
                          company_name: values.company_name,
                          duration_company: values.duration_company,
                          email: values.email,
                          facebook_bus: values.facebook_bus,
                          facebook_per: values.facebook_per,
                          income: values.income,
                          instagram_bus: values.instagram_bus,
                          instagram_per: values.instagram_per,
                          linked_in: values.linked_in,
                          number: values.number,
                          occupation: values.occupation,
                          save_per_time: values.save_per_time,
                          savings_plan: values.savings_plan,
                          twitter_bus: values.twitter_bus,
                          twitter_per: values.twitter_per
                        }) 
                        resetForm()
                        setSubmitting(false);
                    }, 500)
                }}
        >
         {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
           <form onSubmit={handleSubmit} className='page'>
           <h3>Contact Form</h3>
            <p>Personal Info</p>
            <div className='input-row'>
             <input 
               type='text' 
               name='name' 
               id='name'
               placeholder='Name'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.name}
               className={touched.name && errors.name ? 'has-error' : null}
               />
               <Error touched={touched.name} message={errors.name} />
           </div>
           <div className='input-row'>
             <input 
               type='email' 
               name='email' 
               id='email'
               placeholder='Email'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
               className={touched.email && errors.email ? 'has-error' : null}
               />
                <Error touched={touched.email} message={errors.email} />
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='number' 
               id='number'
               placeholder='Phone Number'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.number}
               className={touched.number && errors.number ? 'has-error' : null}
               />
                <Error touched={touched.number} message={errors.number} />
           </div>
           
           <p>Business related Info</p>
           <div className='input-row'>
             <input 
               type='text' 
               name='company_name' 
               id='company_name'
               placeholder='Company Name'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.company_name}
               className={touched.company_name && errors.company_name ? 'has-error' : null}
               />
                <Error touched={touched.company_name} message={errors.company_name} />
           </div>
           <div className='input-row'>
             <input 
               type='number' 
               name='duration_company' 
               id='duration_company'
               placeholder='Duration of employment(Months)'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.duration_company}
               className={touched.duration_company && errors.duration_company ? 'has-error' : null}
               />
                <Error touched={touched.duration_company} message={errors.duration_company} />
               <p className='que-text'>How long have you been employed at said company in months?</p>
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='occupation'
               id='occupation'
               placeholder= 'Occupation/Job Description'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.occupation}
               className={touched.occupation && errors.occupation ? 'has-error' : null}
               />
                <Error touched={touched.occupation} message={errors.occupation} />
           </div>
           <p>Financial Info</p>
           <div className='input-row'>
             <input 
               type='number' 
               name='income' 
               id='income'
               placeholder='Monthly Income/Turnover'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.income}
               className={touched.income && errors.income ? 'has-error' : null}
               />
               <Error touched={touched.income} message={errors.income} />
               <p className='que-text'>Monthly Income/Turnover</p>
           </div>
        
           <div className='input-row'>
             <input 
               type='text' 
               name='save_per_time' 
               id='save_per_time'
               placeholder= 'Savings per time period'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.save_per_time}
               className={touched.save_per_time && errors.save_per_time ? 'has-error' : null}
               />
                <Error touched={touched.save_per_time} message={errors.save_per_time} />
                <p className='que-text'>How would you like to save per time? (e.g 5000 weekly, 90000 monthly)</p>
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='savings_plan' 
               id='savings_plan'
               placeholder='Preferred Savings Plan'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.savings_plan}
               className={touched.savings_plan && errors.savings_plan ? 'has-error' : null}
               />
               <Error touched={touched.savings_plan} message={errors.savings_plan} />
                <p className='que-text'>(e.g Daily, Weekly, Biweekly, Monthly)</p>
           </div>
           <p>Social Media Handles (Personal)</p>
           <div className='input-row'>
             <input 
               type='text' 
               name='twitter_per' 
               id='twitter_per'
               placeholder='Twitter'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.twitter_per}
               className={touched.twitter_per && errors.twitter_per ? 'has-error' : null}
               />
                <Error touched={touched.twitter_per} message={errors.twitter_per} />
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='instagram_per' 
               id='instagram_per'
               placeholder='Instagram'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.instagram_per}
               className={touched.instagram_per && errors.instagram_per ? 'has-error' : null}
               />
                <Error touched={touched.instagram_per} message={errors.instagram_per} />
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='facebook_per' 
               id='facebook_per'
               placeholder='Facebook'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.facebook_per}
               className={touched.facebook_per && errors.facebook_per ? 'has-error' : null}
               />
                <Error touched={touched.facebook_per} message={errors.facebook_per} />
           </div>
           <p>Social Media Handles (Business)</p>
           <div className='input-row'>
             <input 
               type='text' 
               name='twitter_bus' 
               id='twitter_bus'
               placeholder='Twitter'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.twitter_bus}
               className={touched.twitter_bus && errors.twitter_bus ? 'has-error' : null}
               />
                <Error touched={touched.twitter_bus} message={errors.twitter_bus} />
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='instagram_bus' 
               id='instagram_bus'
               placeholder='Instagram'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.instagram_bus}
               className={touched.instagram_bus && errors.instagram_bus ? 'has-error' : null}
               />
                <Error touched={touched.instagram_bus} message={errors.instagram_bus} />
           </div>
           <div className='input-row'>
             <input 
               type='text' 
               name='facebook_bus' 
               id='facebook_bus'
               placeholder='Facebook'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.facebook_bus}
               className={touched.facebook_bus && errors.facebook_bus ? 'has-error' : null}
               />
                <Error touched={touched.facebook_bus} message={errors.facebook_bus} />
           </div> 
           <div className='input-row'>
             <input 
               type='text' 
               name='linked_in' 
               id='linked_in'
               placeholder='LinkedIn'
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.linked_in}
               className={touched.linked_in && errors.linked_in ? 'has-error' : null}
               />
                <Error touched={touched.linked_in} message={errors.linked_in} />
           </div> 
           <div className='input-row'>
               <button type='submit' disabled={isSubmitting}>Submit</button>
           </div>
       </form>
         )}
        </Formik>
        </div>
        
    )
}
