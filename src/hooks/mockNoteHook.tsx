import React from "react";
import { useStore } from "../contexts/store";

type Props = {};

export default function mockNoteHook() {
  const { setMocknote, initialMockNote }: any = useStore();

  function filterNoteListByCategory(category: any): void {
    const newMock = initialMockNote.filter((item: any) => {
      return item.category === category;
    });

    setMocknote(newMock);
  }

  function GetInitialMockNote(): void {
    setMocknote(initialMockNote);
  }

  function filterNote(e: any, byName: boolean, category: any): void {
    if (!e) {
      setMocknote(initialMockNote);
    } else {
      if (byName && category) {
        const newMock1 = initialMockNote.filter((item: any) => {
          return (
            item.customer_name.toLowerCase().includes(e.toLowerCase()) &&
            item.category === category
          );
        });
        setMocknote(newMock1);
      } else if (byName) {
        const newMock1 = initialMockNote.filter((item: any) => {
          return item.customer_name.toLowerCase().includes(e.toLowerCase());
        });
        setMocknote(newMock1);
      } else {
        const newMock1 = initialMockNote.filter((item: any) => {
          return item.category === e;
        });
        setMocknote(newMock1);
      }
    }
  }

  return { filterNote, filterNoteListByCategory, GetInitialMockNote };
}
