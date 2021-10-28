import React from "react";

interface SportsInfoProps {
  sportName: "Cricket" | "Soccer" | "Baseball" | "Hockey";
  maxPlayers: number;
  disabled?: boolean;
  goat: string[];
}

const SportsInfo = (props: SportsInfoProps) => {
  const { sportName, maxPlayers, disabled, goat } = props;
  return (
    <div>
      <h1>{sportName}</h1>
      <p>Max Players per Team:{maxPlayers}</p>
      <p>Top Players:</p>
      <ul>
        {goat.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <button disabled>More..</button>
    </div>
  );
};

export const PropsPattern = () => {
  return (
    <div>
      <SportsInfo
        sportName="Cricket"
        disabled
        goat={["Ricky", "Shoaib"]}
        maxPlayers={11}
      />
    </div>
  );
};
