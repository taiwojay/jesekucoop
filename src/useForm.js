import {useState, useEffect} from 'react'

const useForm = (callback, validate) =>{
    const[values, setValues] = useState({
                            company_name: "",
                            duration_company: "",
                            email: "",
                            facebook_bus: "",
                            facebook_per: "",
                            firstname: "",
                            income: "",
                            instagram_bus: "",
                            instagram_per: "",
                            lastname: "",
                            linked_in: "",
                            number: "",
                            occupation: "",
                            save_per_time: "",
                            savings_plan: "",
                            twitter_bus: "",
                            twitter_per: "" 
                                    })
    const[errors, setErrors] = useState({})
    const[isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = evt =>{
        const {name, value} = evt.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = evt =>{
       evt.preventDefault();
       setErrors(validate(values));
       setIsSubmitting(true);
    }

    useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitting){
          callback();
          setValues({
            company_name: "",
            duration_company: 0,
            email: "",
            facebook_bus: "",
            facebook_per: "",
            firstname: "",
            income: "",
            instagram_bus: "",
            instagram_per: "",
            lastname: "",
            linked_in: "",
            number: "",
            occupation: "",
            save_per_time: "",
            savings_plan: "",
            twitter_bus: "",
            twitter_per: "" 
        });
      }
    }, [errors])

    return{
        handleChange,
        handleSubmit,
        values,
        errors
    }
}
export default useForm;