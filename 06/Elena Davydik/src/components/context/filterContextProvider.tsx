import { FilterContext } from "./filterContext";
import { useState, MouseEvent } from "react";

type Props = {
  children: React.ReactNode;
};

export const FilterContextProvider = ({ children }: Props) => {
  const [countAdults, setCountAdults] = useState<number>(2);
  const [countChildren, setCountChildren] = useState<number>(0);
  const [countRooms, setCountRooms] = useState<number>(1);

  const adultsHandleClickMinus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countAdults > 0 && countAdults <= 30) {
      event.preventDefault();
      setCountAdults(countAdults - 1);
    }
    event.preventDefault();
  };

  const adultsHandleClickPlus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countAdults >= 0 && countAdults < 30) {
      event.preventDefault();
      setCountAdults(countAdults + 1);
    }
    event.preventDefault();
  };

  const childrenHandleClickMinus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countChildren > 0 && countChildren <= 30) {
      event.preventDefault();
      setCountChildren(countChildren - 1);
    }
    event.preventDefault();
  };

  const childrenHandleClickPlus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countChildren >= 0 && countChildren < 30) {
      event.preventDefault();
      setCountChildren(countChildren + 1);
    }
    event.preventDefault();
  };

  const roomsHandleClickMinus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countRooms > 1 && countRooms <= 30) {
      event.preventDefault();
      setCountRooms(countRooms - 1);
    }
    event.preventDefault();
  };

  const roomsHandleClickPlus = (event: MouseEvent<HTMLButtonElement>) => {
    if (countRooms >= 1 && countRooms < 30) {
      event.preventDefault();
      setCountRooms(countRooms + 1);
    }
    event.preventDefault();
  };
  return (
    <FilterContext.Provider
      value={{
        countAdults,
        adultsHandleClickMinus,
        adultsHandleClickPlus,
        countChildren,
        childrenHandleClickMinus,
        childrenHandleClickPlus,
        countRooms,
        roomsHandleClickMinus,
        roomsHandleClickPlus,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};