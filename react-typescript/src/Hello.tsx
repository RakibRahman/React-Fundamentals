import React, { ComponentType, FC, ReactElement, ReactNode } from "react";

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

class Info extends React.Component {
  render() {
    return <div>This is a Class Component</div>;
  }
}
const Info2 = () => {
  return "Hello" as ReactNode as ReactElement;
};
//Element
const helloElement: ReactElement = <Info />;
const infoElement: ReactElement = React.createElement(Info);
const infoElement2: ReactElement = React.createElement(Info2);

// ComponentType - component that accepts another component
function RenderComponent({ Comp }: { Comp: ComponentType }) {
  return (
    <div>
      <Comp />
    </div>
  );
}
<RenderComponent Comp={Info} />;
