import React, { useState } from "react";
import { customers, note } from "../assets/mockData.ts";
type Props = {
  children: any;
};

const storeContext = React.createContext({});

function StoreProvider(props: Props) {
  const [currentPage, setCurrentPage] = useState("yourNote");
  const [category, setCategory] = useState("");
  const [noteDataById, setNoteDataById] = useState({});

  // mock data for test *************************************************
  const initialCustomers = customers;
  const [mockCustomers, setMockCustomers]: any = useState(customers);
  const initialMockNote = note;
  const [mockNote, setMocknote]: any = useState([]);

  return (
    <storeContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        mockNote,
        category,
        setCategory,
        setMocknote,
        initialMockNote,
        mockCustomers,
        setMockCustomers,
        initialCustomers,
        noteDataById,
        setNoteDataById,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}

const useStore = () => React.useContext(storeContext);
export { StoreProvider, useStore };
