import "./Info.css";

function GeneralInfo({
  isError = false,
  messages = [],
  btnText = "Sample",
  handleAction,
}) {
  if (messages) {
    console.log(messages);
  }
  if (!Array.isArray(messages)) {
    messages = [messages];
  }
  return (
    <div className={isError ? "info-box auth-error " : "info-box "}>
      <h1>{isError ? "An Error Occured" : "Information"}</h1>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>

      {handleAction && (
        <button onClick={handleAction} className="info-btn">
          {btnText}
        </button>
      )}
    </div>
  );
}

export default GeneralInfo;
