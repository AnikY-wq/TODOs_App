const getFieldAttributes = (field) => {
  switch (field) {
    case "password":
      return {
        label: "Password",
        placeholder: "Enter password",
        type: "password",
      };
    case "confirmPassword":
      return {
        label: "Confirm Password",
        placeholder: "Confirm password",
        type: "password",
      };
    case "email":
      return { label: "Email", placeholder: "Enter email", type: "email" };
    case "username":
      return { label: "Username", placeholder: "Enter username", type: "text" };
    default:
      return { label: field, placeholder: `Enter ${field}`, type: "text" };
  }
};

export const FormFields = ({ fields }) => {
  return fields.map((field) => {
    const { label, placeholder, type } = getFieldAttributes(field);
    return (
      <div className="form-group" key={field}>
        <label htmlFor={field} className="label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={field}
          name={field}
          placeholder={placeholder}
        />
      </div>
    );
  });
};
