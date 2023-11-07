import React from "react";
import CustomerCard from "../CustomerCard";
import { useStore } from "../../contexts/store";
type Props = {};

export default function CustomersList({}: Props) {
  const { mockCustomers }: any = useStore();
  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <h1 className="text-3xl font-bold text-center">
        customers
        <p className="text-base font-medium">
          ( click the card for read more details or edit )
        </p>
      </h1>
      <main className="grid grid-cols-3 gap-[2rem] max-sm:grid-cols-1">
        {mockCustomers.map((item: any) => {
          return (
            <CustomerCard
              avartar={item.avartar}
              fullname={item.name}
              tel={item.tel}
              address={item.address}
            />
          );
        })}
      </main>
    </div>
  );
}
