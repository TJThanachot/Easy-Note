import React from "react";
import { useStore } from "../contexts/store";

type Props = {};

export default function customerHook() {
  const { initialCustomers, setMockCustomers }: any = useStore();

  function getCustomersList(): void {
    // try {
    //     const resutl = await axios.get("----------------------------------")
    //     setMockCustomers(resutl)
    // } catch (err) {
    //     console.log(err)
    // }
    setMockCustomers(initialCustomers);
  }
  return { getCustomersList };
}
