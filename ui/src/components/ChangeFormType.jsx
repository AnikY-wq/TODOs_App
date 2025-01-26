export const ChangeFormType = ({ type, setFormType, submitForm }) => {
  const formAttributes = {
    login: {
      message: "Are you new here? Come register with us!",
      buttonName: "Register",
    },
    register: {
      message: "Already a member? Login here!",
      buttonName: "Login",
    },
  };

  const handleFormSubmit = () => {
    return submitForm();
  };
  const { title, message, buttonName } =
    formAttributes[type] || formAttributes.login;

  return (
    <>
      <div
        className="message"
        onClick={() => setFormType(type === "login" ? "register" : "login")}
        cursor="pointer"
      >
        <a href="#">{message}</a>
      </div>
      <button className="btn btn-primary" onClick={() => handleFormSubmit()}>
        {buttonName}{" "}
      </button>
    </>
  );
};
