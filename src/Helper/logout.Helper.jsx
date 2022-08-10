import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/action/loginToken";
export const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  localStorage.clear();
  dispatch(setToken(""));
  history.push("/home");
  return <></>;
};
