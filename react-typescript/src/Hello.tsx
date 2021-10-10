import { FC, ReactElement } from "react";

export const Hello = ({
  message,
  date,
}: {
  message: string;
  date: string;
}): ReactElement => {
  return (
    <div>
      {message} || {date}
    </div>
  );
};

export const Message: FC<{ text: string }> = ({ children, text }) => {
  return <div>{text}</div>;
};
