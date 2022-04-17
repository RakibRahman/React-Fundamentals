import { useState, useEffect, useCallback } from "react";
import localforage from "localforage";
import type { Person } from "../types/person";
import { sleep } from "../utils/sleep";
import { useIsMounted } from "./useIsMounted";
import { useDebounce } from "./useDebounce";
import { useWillUnmount } from "./useWillUnmount";
import { useThrottle } from "./useThrottle";

export const usePerson = (initialPerson: Person) => {
  const [person, setPerson] = useState(initialPerson);
  const [, setNow] = useState(new Date());
  const isMounted = useIsMounted();

  const savePerson = (person: Person | null): void => {
    localforage.setItem("person", person);
    console.log("Saving Current Person", person);
  };
  
  //? get person info from storage
  useEffect(() => {
    const getPerson = async () => {
      const person = await localforage.getItem<Person>("person");
      await sleep(2500);
      if (isMounted.current) {
        setPerson(person ?? initialPerson);
      }
    };
    getPerson();
  }, [initialPerson, isMounted]);

  useEffect(() => {
    const handle = setInterval(() => setNow(new Date()), 500);
    return () => clearInterval(handle);
  }, []);
  const saveFn = useCallback(() => {
    savePerson(person);
  }, [person]);

  //? update savePerson on 'person' update
  // useDebounce(saveFn, 1000);
  useThrottle(saveFn, 1000);

  useWillUnmount(saveFn);

  return [person, setPerson] as const;
};
