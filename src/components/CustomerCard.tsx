import React from "react";
import { RxAvatar } from "react-icons/rx";
type Props = {
  avartar: string;
  fullname: string;
  tel: string;
  address: string;
};

export default function CustomerCard(props: Props) {
  return (
    <div className="bg-white cursor-pointer h-[12rem] p-[1rem] flex flex-col justify-around rounded-lg shadow-md transition duration-300 hover:scale-110">
      <div className="flex h-auto">
        {props.avartar ? (
          <img
            className="w-[35%] max-h-[6rem] bg-white rounded-full object-cover"
            src={props.avartar}
            alt=""
          />
        ) : (
          <RxAvatar className="w-[35%] bg-white rounded-full h-full" />
        )}

        <div className="w-[65%] h-[100%] pl-[0.5rem] truncate overflow-hidden">
          <div>
            <h4 className="font-semibold bg-[#7BE495] rounded-md pl-[0.5rem] ">
              full name
            </h4>
            <span className="pl-[0.5rem]">{props.fullname}</span>
          </div>
          <div>
            <h4 className="font-semibold bg-[#7BE495] rounded-md pl-[0.5rem]">
              tel.
            </h4>
            <span className="pl-[0.5rem]">{props.tel}</span>
          </div>
        </div>
      </div>
      <div className="truncate overflow-hidden">
        <h4 className="font-semibold bg-[#7BE495] rounded-md pl-[0.5rem]">
          address
        </h4>
        <span className="pl-[0.5rem]">{props.address}</span>
      </div>
    </div>
  );
}
