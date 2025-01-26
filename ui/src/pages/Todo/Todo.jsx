export const Todo = () => {
  const checkLoggedIn = () => {
    const res = dummyLogin();
    if (res) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <h1>Todo</h1>
    </div>
  );
};
