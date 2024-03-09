function RestartQuiz({ dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        RestartQuiz
      </button>
    </div>
  );
}

export default RestartQuiz;
