import React, { useState } from "react";
// import { customers, note } from "../assets/mockData.ts";
type Props = {
  children: any;
};

const storeContext = React.createContext({});

function StoreProvider(props: Props) {
  const [currentPage, setCurrentPage] = useState("yourNote");
  const [category, setCategory] = useState("");
  const [noteDataById, setNoteDataById] = useState({});
  const [mockNote, setMocknote]: any = useState([]);

  //state for customer *****************************************************
  const [avartarFile, setAvartarFile] = useState("");
  const [avartarUrl, setAvartarUrl] = useState("");
  const [allCustomer, setAllCustermer] = useState([]);
  const [customerDataById, setCustomerDataById] = useState({});

  return (
    <storeContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        mockNote,
        category,
        setCategory,
        setMocknote,
        noteDataById,
        setNoteDataById,
        // customer **********************************************************
        //******************************************************* */
        avartarFile,
        setAvartarFile,
        avartarUrl,
        setAvartarUrl,
        allCustomer,
        setAllCustermer,
        customerDataById,
        setCustomerDataById,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}

const useStore = () => React.useContext(storeContext);
export { StoreProvider, useStore };
