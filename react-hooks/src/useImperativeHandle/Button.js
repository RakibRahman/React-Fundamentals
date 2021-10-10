import React, { useImperativeHandle, forwardRef, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      {toggle && <h3>Toggle Me</h3>}
      <button>Child Button</button>
    </div>
  );
});

export default Button;
