import { useState, useEffect } from "react";
import localforage from "localforage";
import type { Person } from "../types/person";

export const usePerson = (initialPerson: Person) => {
  const [person, setPerson] = useState(initialPerson);

  const savePerson = (person: Person | null): void => {
    localforage.setItem("person", person);
    console.log("Saving Current Person");
  };
  //? get person info from storage
  useEffect(() => {
    const getPerson = async () => {
      const person = await localforage.getItem<Person>("person");
      setPerson(person ?? initialPerson);
    };
    getPerson();
  }, [initialPerson]);

  //? update savePerson on 'person' update
  useEffect(() => {
    savePerson(person);
  }, [person]);

  return [person, setPerson] as const;
};
