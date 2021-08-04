export default function vaidateForm(values){
    let errors = {};
   if(!values.email){
       errors.email = 'Email is required'
   }else if(!/\S+@\S+/.test(values.email)){
       errors.email = 'Invalid Email'
   }
   if(!values.firstname){
    errors.firstname = 'Firstname is required'
   }
   if(!values.firstname){
    errors.lastname = 'Lastname is required'
   }
   if(!values.number){
       errors.number = 'Phone number is required'
   }else if(values.number.length < 11){
       errors.number = 'Invalid phone number'
   }
    return errors;
}