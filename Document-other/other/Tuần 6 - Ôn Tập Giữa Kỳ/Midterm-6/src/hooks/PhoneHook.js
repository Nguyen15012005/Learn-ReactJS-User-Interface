import { useCallback, useReducer } from "react";

const initialValue = {
  data: [],
  currentId: 0,
};

const PhoneReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: state.currentId + 1 }],
        currentId: state.currentId + 1,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        data: state.data.filter((x) => x.id !== action.payload.id),
      };
    }
    default:
      return { ...state };
  }
};

export const usePhoneHook = () => {
  const [state, dispatch] = useReducer(PhoneReducer, initialValue);

  const addPhone = useCallback((phone) => {
    dispatch({ type: "ADD", payload: phone });
  }, []);

  const removePhone = useCallback((phoneIdToRemove) => {
    dispatch({ type: "REMOVE", payload: { id: phoneIdToRemove } });
  }, []);

  return { data: state.data, addPhone, removePhone };
};

// [data, setData] = useState(0)
// [data, dispatch] = usePhoneHook()
// dispatch({action: "ADD", ...})
// dispatch({action: "REMOVE", ...})
// [data, addPhone, removePhone] = usePhoneHook()
// {data, addPhone, removePhone} = usePhoneHook()

// Callback khác gì thường

// const a = 3
// const b = 3
// a === b => true, tham trị

// const a = {name: "Phú"}
// const b = {name: "Phú"}
// a === b => False

// const a = () => {console.log("HelloWorld")}
// const b = () => {console.log("HelloWorld")}
// a === b

// useState() => rerender => ham dc chay lai

// a = () => {console.log("HelloWorld")}
// useEffect(() => {}, [a])
