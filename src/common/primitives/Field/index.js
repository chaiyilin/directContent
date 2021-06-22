import { Children, isValidElement, cloneElement } from "react";
import { useField } from "formik";

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
