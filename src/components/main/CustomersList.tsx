import React, { useEffect, useState } from "react";
import CustomerCard from "../CustomerCard";
import { useStore } from "../../contexts/store";
import customerHook from "../../hooks/customerHook";
import { DebounceInput } from "react-debounce-input";
type Props = {};

export default function CustomersList({}: Props) {
  const { getCustomersList, filterByAddress, filterByCustomerName }: any =
    customerHook();
  const { setCustomerDataById, setCurrentPage, allCustomer }: any = useStore();
  useEffect(() => {
    getCustomersList();
  }, []);

  // state for check input search*************************************************
  const [fullnameSearch, setFullnameSearch] = useState("");
  const [addressSearch, setAddressSearch] = useState("");
  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <h1 className="text-3xl font-bold text-center">
        customers
        <p className="text-base font-medium">
          ( click the card for read more details or edit )
        </p>
        <div className="flex gap-[1rem] max-sm:flex-col max-sm:gap-0">
          <DebounceInput
            debounceTimeout={500}
            type="Search"
            className="font-normal shadow-md text-base outline-none mt-[1.5rem] self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-white w-full"
            placeholder="Full name search..."
            onChange={(e) => {
              setFullnameSearch(e.target.value);
              if (addressSearch) {
                filterByCustomerName(e.target.value, addressSearch);
              } else {
                filterByCustomerName(e.target.value);
              }
            }}
          />
          <DebounceInput
            debounceTimeout={500}
            type="Search"
            className="font-normal shadow-md text-base outline-none mt-[1.5rem] self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-white w-full"
            placeholder="Address search..."
            onChange={(e) => {
              setAddressSearch(e.target.value);
              if (fullnameSearch) {
                filterByAddress(e.target.value, fullnameSearch);
              } else {
                filterByAddress(e.target.value);
              }
            }}
          />
        </div>
      </h1>
      <main className="grid grid-cols-3 gap-[2rem] max-sm:grid-cols-1">
        {allCustomer.map((item: any, index: number) => {
          return (
            <CustomerCard
              onClick={() => {
                // go to detail and edit*******************************
                setCustomerDataById({
                  ...item,
                  update: true,
                });
                setCurrentPage("CRUDCustomer");
              }}
              key={index}
              avartar={item.avartar}
              fullname={item.fullname}
              tel={item.tel}
              address={item.address}
            />
          );
        })}
      </main>
    </div>
  );
}
