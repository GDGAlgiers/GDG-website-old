import { useState, useCallback } from "react"
const initError = (initvalues) => {
  let err = {}
  Object.keys(initvalues)
        .forEach(key => err[key] = "")
  return err
}
export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialValues)

  const setValue =  (target, newValue) => setValues({ ...values, [target]: newValue })
  const setError = (target,newValue)=> setErrors({...errors,[target] : newValue})
  const resetValues = ()=> setValues({})
  const resetErrors = ()=> setErrors({})
  console.log({values,errors});
  return {values, errors ,setValue , setError,resetValues,resetErrors}
}
