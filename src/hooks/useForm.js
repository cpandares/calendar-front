import { useState } from "react";

export const useForm = (initialValues) => {
   const [ formState, setFormState ] = useState(initialValues);
  
    
  
      const onInputChange = ({target})=>{
          const { name, value } = target
          setFormState({
              ...formState,
              [name]:value
          })
      }

      const reset = ()=>{
        setFormState(initialValues)
      }

      return {
        ...formState,
        formState,
        onInputChange,
        reset
      }
}
