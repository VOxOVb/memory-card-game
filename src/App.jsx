import { useReducer } from "react";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
const initialState = { status: "loading", level: "", timer: 0, score: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "handleSelectLevel":
      return { ...state, level: action.payload };
      case "handleSelectTimer":
        return { ...state, timer: action.payload };
    case "start":
      return { ...state, status: "start" };
    default:
      return state;
  }
}
export default function App() {
  const [{ status, level, timer, score }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      <Header status={status} level={level} timer={timer} dispatch={dispatch} />
      <main>{status === "start" && <CardContainer level={level} score={score} />}</main>
    </>
  );
}

