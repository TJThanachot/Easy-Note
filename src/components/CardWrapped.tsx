import React from "react";
import Card from "./Card";
import { GiStabbedNote, GiCalendar } from "react-icons/gi";
import { BiListPlus, BiTask } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
type Props = {};

export default function CardWrapped({}: Props) {
  return (
    <div className="w-full flex justify-between max-sm:flex-col max-sm:gap-[1rem]">
      <Card
        icon={<GiStabbedNote />}
        title="Note"
        des="Make all type of note you want"
      />
      <Card
        icon={<GiCalendar />}
        title="Appointment"
        des="Make an appointment for remind the day is important"
      />
      <Card
        icon={<BiListPlus />}
        title="Todo List"
        des="Make some to do list by note"
      />
      <Card
        icon={<BiTask />}
        title="Task"
        des="Make a task note that is important of yours"
      />
      <Card
        icon={<IoIosPeople />}
        title="Customers"
        des="Collect your all customers for remind them every time"
      />
    </div>
  );
}
