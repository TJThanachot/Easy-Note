import React from "react";
import Card from "./Card";
import { GiStabbedNote, GiCalendar } from "react-icons/gi";
import { BiListPlus, BiTask } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
type Props = {};

export default function CardWrapped({}: Props) {
  return (
    <div className="w-full flex justify-around">
      <Card
        icon={<GiStabbedNote />}
        title="Note"
        des="descriptionsdafsadfsdfasdfsafdasdf,descriptiondescriptiondescription"
      />
      <Card
        icon={<GiCalendar />}
        title="Appointment"
        des="descriptionsdafsadfsdfasdfsafdasdf,descriptiondescriptiondescription"
      />
      <Card
        icon={<BiListPlus />}
        title="Todo List"
        des="descriptionsdafsadfsdfasdfsafdasdf,descriptiondescriptiondescription"
      />
      <Card
        icon={<BiTask />}
        title="Task"
        des="descriptionsdafsadfsdfasdfsafdasdf,descriptiondescriptiondescription"
      />
      <Card
        icon={<IoIosPeople />}
        title="Customers"
        des="descriptionsdafsadfsdfasdfsafdasdf,descriptiondescriptiondescription"
      />
    </div>
  );
}
