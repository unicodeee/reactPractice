import React, {
  Component,
  forwardRef,
  useState,
  useImperativeHandle,
  useContext,
  useEffect,
} from "react";

import UserContext from "../context/userContext";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  const user = useContext(UserContext);
  console.log(user);

  useImperativeHandle(ref, () => ({
    alterToggle: () => {
      setToggle(!toggle);
    },
  }));

  return (
    <React.Fragment>
      <button>{toggle.toString()}</button>
      {toggle && <p>Toggle</p>};
    </React.Fragment>
  );
});

export default Button;
