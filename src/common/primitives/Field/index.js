import { Children, isValidElement, cloneElement } from "react";
import { useField, useFormik } from "formik";

// essential: name, onChange, onBlur, value

// from useField:
// [FieldInputProps, FieldMetaProps and FieldHelperProps]

// FieldMetaProps
// error?: string - The field's error message (plucked out of errors)
// initialError?: string - The field's initial error if the field is present in initialErrors (plucked out of initialErrors)
// initialTouched: boolean - The field's initial value if the field is present in initialTouched (plucked out of initialTouched)
// initialValue?: Value - The field's initial value if the field is given a value in initialValues (plucked out of initialValues)
// touched: boolean - Whether the field has been visited (plucked out of touched)
// value: any - The field's value (plucked out of values)

// FieldHelperProps
// setValue(value: any, shouldValidate?: boolean): void - A function to change the field's value. Calling this will trigger validation to run if validateOnChange is set to true (which it is by default). You can also explicitly prevent/skip validation by passing a second argument as false.
// setTouched(value: boolean, shouldValidate?: boolean): void - A function to change the field's touched status. Calling this will trigger validation to run if validateOnBlur is set to true (which it is by default). You can also explicitly prevent/skip validation by passing a second argument as false.
// setError(value: any): void - A function to change the field's error value

// The "FormikBag"
// props (props passed to the wrapped component)
// resetForm
// setErrors
// setFieldError
// setFieldTouched
// setFieldValue
// setStatus
// setSubmitting
// setTouched
// setValues

const Field = ({ label, name, children, ...props }) => {
  const [field, meta] = useField(name);

  const childrenWithProps = Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      return cloneElement(child, { ...field, ...props });
    }
    return child;
  });

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      {childrenWithProps}
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default Field;
