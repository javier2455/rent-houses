import { Toggle } from "keep-react";
import { useState } from "react";

export const Switch = () => {
  const [toggle, setToggle] = useState(false)

  console.log('toggle', toggle)
  return (
    <div className="flex">
      {/* <Toggle bgColor="primary" label="Primary" size="md" onChange={setToggle} /> */}
      <Toggle bgColor="slate" label="Slate" size="md" onChange={setToggle} />
    </div>
  );
}