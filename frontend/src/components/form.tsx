import * as React from "react"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="space-y-4 bg-white p-6 rounded shadow-md" {...props}>
      {children}
    </form>
  )
}

export default Form;
