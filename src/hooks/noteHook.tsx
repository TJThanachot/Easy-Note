import { useStore } from "../contexts/store";
import moment from "moment";

export default function mockNoteHook() {
  const { setMocknote }: any = useStore();

  // hook for NoteList page *****************************************
  function filterByDate(category: string, date: string, title: string) {
    const storedNote: any = localStorage.getItem("note");
    // filter category first *******************************************
    const result = JSON.parse(storedNote).filter((item: any) => {
      return item.category === category;
    });
    if (!date || (!date && !title)) {
      setMocknote(result);
    }
    if (date && title) {
      const NewResult = result.filter((item: any) => {
        return (
          item.noted_date.includes(date) &&
          item.title.toLowerCase().includes(title.toLowerCase())
        );
      });
      setMocknote(NewResult);
    } else {
      const NewResult = result.filter((item: any) => {
        return item.noted_date.includes(date);
      });
      setMocknote(NewResult);
    }
  }
  // hook for NoteList page *****************************************
  function filterByTitle(category: string, title: string, dateTime: string) {
    const storedNote: any = localStorage.getItem("note");
    // filter category first *******************************************
    const result = JSON.parse(storedNote).filter((item: any) => {
      return item.category === category;
    });
    if (!title || (!title && !dateTime)) {
      setMocknote(result);
    }
    if (title && dateTime) {
      const NewResult = result.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(title.toLowerCase()) &&
          item.noted_date.includes(dateTime)
        );
      });
      setMocknote(NewResult);
    } else {
      const NewResult = result.filter((item: any) => {
        return item.title.toLowerCase().includes(title.toLowerCase());
      });
      setMocknote(NewResult);
    }
  }

  // hook for NoteList page *****************************************
  function filterNoteListByCategory(category: any): void {
    // if have API GET ****************************************************
    // try {
    //   const result = await axios.get("------------------------------")
    //   setMocknote(result)
    const storedNote = localStorage.getItem("note");
    if (storedNote !== null) {
      const result = JSON.parse(storedNote);
      if (result) {
        const newMock = result.filter((item: any) => {
          return item.category === category;
        });

        setMocknote(newMock);
      }
    }
    // } catch(err) {
    //   console.log(err)
    // }
  }

  // hook get for NoteHistory page *****************************************
  function GetInitialMockNote(): void {
    // if have API GET ****************************************************
    // try {
    //   const result = await axios.get("------------------------------")
    //   setMocknote(result)
    // } catch(err) {
    //   console.log(err)
    // }
    const storedNote: any = localStorage.getItem("note");
    const result = JSON.parse(storedNote);

    setMocknote(result);
  }

  // hook for NoteHistory page *****************************************
  function filterNote(e: any, byName: boolean, category: any): void {
    const storedNote: any = localStorage.getItem("note");
    const result = JSON.parse(storedNote);

    if (!e) {
      setMocknote(result);
    } else {
      if (byName && category) {
        const newMock1 = result.filter((item: any) => {
          return (
            item.customer_name.toLowerCase().includes(e.toLowerCase()) &&
            item.category === category
          );
        });
        setMocknote(newMock1);
      } else if (byName) {
        const newMock1 = result.filter((item: any) => {
          return item.customer_name.toLowerCase().includes(e.toLowerCase());
        });
        setMocknote(newMock1);
      } else {
        const newMock1 = result.filter((item: any) => {
          return item.category === e;
        });
        setMocknote(newMock1);
      }
    }
  }

  function createNote(values: any): any {
    // if have API GET ****************************************************
    const newValues = {
      ...values,
      noted_date: moment(new Date()).format("DD/MM/YYYY"),
      updated_at: moment(new Date()).format("DD/MM/YYYY"),
    };
    // try {
    //   const result = await axios.post("----------------------------------",newValues)
    // } catch (err) {
    //   console.log(err)
    // }
    const storedNote = localStorage.getItem("note");
    let newResult;
    if (storedNote !== null) {
      const result = JSON.parse(storedNote);
      newValues.id = result[result.length - 1].id + 1;
      newResult = result;
      newResult.push(newValues);
    } else {
      newValues.id = 1;
      newResult = [];
      newResult.push(newValues);
    }

    localStorage.setItem("note", JSON.stringify(newResult));
    setMocknote(newResult);
    console.log("created note successfully");
  }

  function updateNote(values: any) {
    // if have API GET ****************************************************
    const newValues = {
      ...values,
      updated_at: moment(new Date()).format("DD/MM/YYYY"),
    };
    // try {
    //   const result = await axios.put("----------------------------------"+newValues.id,newValues)
    // } catch (err) {
    //   console.log(err)
    // }
    const storedNote = localStorage.getItem("note");
    if (storedNote !== null) {
      const result = JSON.parse(storedNote);
      const newResult = result.map((item: any) => {
        if (item.id === newValues.id) {
          item = newValues;
        }
        return item;
      });
      localStorage.setItem("note", JSON.stringify(newResult));
      setMocknote(newResult);
    }
    console.log("updated note successfully");
  }

  function deleteNote(id: number) {
    // if have API GET ****************************************************
    // try {
    //   const result = await axios.delete("----------------------------------"+id)
    // } catch (err) {
    //   console.log(err)
    // }
    const storedNote = localStorage.getItem("note");
    if (storedNote !== null) {
      const result = JSON.parse(storedNote);
      const newResult = result.filter((item: any) => {
        return item.id !== id;
      });

      if (newResult.length < 1) {
        localStorage.removeItem("note");
        setMocknote([]);
      } else {
        localStorage.setItem("note", JSON.stringify(newResult));
        setMocknote(newResult);
      }
    }
    console.log("deleted note successfully");
  }

  return {
    filterNote,
    filterNoteListByCategory,
    GetInitialMockNote,
    createNote,
    updateNote,
    deleteNote,
    filterByTitle,
    filterByDate,
  };
}
