import { Dispatch, SetStateAction, useState } from "react";
export const MyDiv = ({
  value,
  setValue,
}: {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) => {
  //   const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <h3>{value}</h3>
      <button onClick={() => setValue((value) => (value || 0) + 1)}>+++</button>
    </>
  );
};
