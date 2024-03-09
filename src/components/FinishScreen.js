import RestartQuiz from "./RestartQuiz";

function FinishScreen({ maxPossiblePoints, points, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage === 80 && percentage < 100) emoji = "🥳";
  if (percentage === 50 && percentage < 80) emoji = "😊";
  if (percentage === 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
        {emoji}
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <RestartQuiz dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
