import { ReactElement } from "react";
import { LabeledInput, Loading } from "../components";
import { initialPerson } from "../utils";
import { usePerson } from "./usePerson";

interface LoadInfo {
  value: string;
  value2: string;
  surname: string;
  email: string;
  address: string;
}

export function PersonEditor(): ReactElement {
  const [person, setPerson] = usePerson(initialPerson);

  if (!person) {
    return <Loading />;
  }
  const preInfo = (info: LoadInfo) => {
    if (info.value === info.value2) {
      setPerson((person) => ({
        ...person!,
        surname: info.surname,
        address: info.address,
        email: info.email,
      }));
    }
  };

  return (
    <form
      className="person-editor"
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Submitting\n${JSON.stringify(person, null, 2)}`);
      }}
    >
      <h2>Person Editor</h2>
      <LabeledInput
        label="Firstname:"
        value={person.firstname}
        onChange={(e) => {
          setPerson((person) => ({
            ...person!,
            firstname: e.target.value,
          }));

          const minato = {
            value: e.target.value,
            value2: "Minato",
            surname: "Yellow",
            email: "yellow@gmail.com",
            address: "Konoha",
          };
          preInfo(minato);
          const pain = {
            value: e.target.value,
            value2: "Pain",
            surname: "Six Path of Pain",
            email: "sixpath@gmail.com",
            address: "Rain village",
          };
          preInfo(pain);
        }}
      />
      <LabeledInput
        label="Surname:"
        value={person.surname}
        onChange={(e) => {
          setPerson({ ...person, surname: e.target.value });
        }}
      />
      <LabeledInput
        label="Email:"
        value={person.email}
        onChange={(e) => {
          setPerson({ ...person, email: e.target.value });
        }}
      />
      <LabeledInput
        label="Address:"
        value={person.address}
        onChange={(e) => {
          setPerson({ ...person, address: e.target.value });
        }}
      />
      <LabeledInput
        label="Phone:"
        value={person.phone}
        onChange={(e) => {
          setPerson({ ...person, phone: e.target.value });
        }}
      />
      <button className="btn btn-primary">Save</button>
      <hr />
      <pre>{JSON.stringify(person, null, "---")}</pre>
    </form>
  );
}
