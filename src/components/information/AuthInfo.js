import "./Info.css";

function AuthInfo({ isError = false, messages = [] }) {
  if (messages) {
    console.log(messages);
  }
  if (!Array.isArray(messages)) {
    messages = [messages];
  }
  return (
    <div className={isError ? "info-box auth-error " : "info-box "}>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthInfo;
