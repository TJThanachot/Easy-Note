import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { TextField, MenuItem } from "@mui/material";
import mockNoteHook from "../../hooks/noteHook";
import Swal from "sweetalert2";
import { useStore } from "../../contexts/store";
import { useNavigate } from "react-router-dom";
export default function CRUDNote({ props }: any) {
  const nav = useNavigate();
  const { createNote, deleteNote, updateNote } = mockNoteHook();
  const { setCurrentPage, setCategory }: any = useStore();
  const initCategory: string[] = ["note", "todo", "appointment", "task"];

  const inappropriateWords = [
    "fuck",
    "cunt",
    "bitch",
    "shit",
    "bull shit",
    "damn",
    "dick",
  ]; // for example

  const inappropriateWordsValidator = (value: string | any) => {
    if (typeof value === "string") {
      for (const word of inappropriateWords) {
        if (value.toLowerCase().includes(word)) {
          return false; // Validation fails if an inappropriate word is found
        }
      }
      return true; // Validation passes if no inappropriate words are found
    } else {
      return true;
    }
  };
  return (
    <div className="w-full">
      <Formik
        enableReinitialize
        initialValues={
          !props.update
            ? {
                title: "",
                customer_name: "",
                category: "note",
                detail: "",
              }
            : {
                title: props.title,
                customer_name: props.customer_name,
                category: props.category,
                detail: props.detail,
              }
        }
        //  onSubmit here ****************************************************************
        //   **************************************************
        onSubmit={(values, formikHelpers) => {
          Swal.fire({
            title: `Are you sure to ${
              props.update ? "update" : "create"
            } note?`,
            showDenyButton: true,
            confirmButtonText: "Yes confirm",
            denyButtonText: `No I'm not sure`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                `${props.update ? "Update" : "Create"} note successfully`,
                "",
                "success"
              );
              // call hook here *******************************************************
              //   ******************************************************************
              if (props.update) {
                const newValues = {
                  ...values,
                  id: props.id,
                  noted_date: props.noted_date,
                };
                updateNote(newValues);
              } else {
                createNote(values);
                formikHelpers.resetForm();
                setCategory(values.category);
                setCurrentPage("noteList");
                nav("/dashboard/NoteList");
              }
            } else if (result.isDenied) {
              Swal.fire("You canceled", "", "error");
            }
          });
        }}
        //     input validation here ****************************************************
        // ***********************************************************
        validationSchema={yup.object().shape({
          title: yup
            .string()
            .required("Please enter title")
            .max(15, "Title must less than 15 character")
            .test(
              "no-inappropriate-words",
              "Title contains inappropriate words",
              (value) => inappropriateWordsValidator(value)
            ),
          customer_name: yup
            .string()
            .notRequired()
            .test(
              "no-inappropriate-words",
              "Customer name contains inappropriate words",
              (value) => inappropriateWordsValidator(value)
            ),
          detail: yup
            .string()
            .notRequired()
            .test(
              "no-inappropriate-words",
              "Detail contains inappropriate words",
              (value) => inappropriateWordsValidator(value)
            ),
        })}
      >
        {({ errors, touched }) => {
          return (
            <Form
              className="flex flex-col gap-[2rem] items-center w-full "
              autoComplete="off"
            >
              <h1 className="text-3xl font-bold">
                {!props.update ? "New Note" : "Update your note"}
              </h1>
              <main className="flex flex-col gap-[1rem] w-full bg-white p-[1rem] rounded-lg">
                <label className="font-bold" htmlFor="title">
                  Title
                </label>
                <Field
                  as={TextField}
                  variant="outlined"
                  error={Boolean(errors.title) && Boolean(touched.title)}
                  helperText={Boolean(touched.title) && errors.title}
                  placeholder="fill your title"
                  name="title"
                  type="text"
                />
                <label className="font-bold" htmlFor="customer_name">
                  Customer Name
                </label>
                <Field
                  as={TextField}
                  error={Boolean(errors.customer_name)}
                  helperText={
                    Boolean(touched.customer_name) && errors.customer_name
                  }
                  variant="outlined"
                  placeholder="fill your customer name"
                  name="customer_name"
                  type="text"
                />
                <label className="font-bold" htmlFor="category">
                  Select Category
                </label>
                <Field select name="category" as={TextField}>
                  {initCategory.map((item: string) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Field>

                <label className="font-bold" htmlFor="detail">
                  Details
                </label>
                <Field
                  as={TextField}
                  error={Boolean(errors.detail)}
                  helperText={Boolean(touched.detail) && errors.detail}
                  placeholder="fill your note..............."
                  name="detail"
                  multiline
                  rows={10}
                  cols={80}
                ></Field>
                <div className="flex w-full justify-between">
                  {/* delete button here **************************************************
                   ****************************************************************** */}
                  {props.update ? (
                    <button
                      type="button"
                      className="w-[10rem] max-sm:w-[30%] h-[2rem] font-bold rounded-lg bg-red-500 hover:opacity-80"
                      onClick={() => {
                        Swal.fire({
                          title: `Are you sure to delete note?`,
                          showDenyButton: true,
                          confirmButtonText: "Yes confirm",
                          denyButtonText: `No I'm not sure`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire(
                              `delete note successfully`,
                              "",
                              "success"
                            );
                            deleteNote(props.id);
                            setCurrentPage("yourNote");
                            nav("/dashboard");
                          } else if (result.isDenied) {
                            Swal.fire("You canceled", "", "error");
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  ) : null}
                  <div className="flex gap-[2rem] justify-end w-full max-sm:gap-2 max-sm:w-[65%] ">
                    <button
                      type="submit"
                      className="w-[6rem] h-[2rem] font-bold rounded-lg bg-primary hover:opacity-80"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="w-[6rem] h-[2rem] font-bold rounded-lg bg-primary hover:opacity-80"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => {
                        if (props.update) {
                          setCategory(props.category);
                          setCurrentPage("noteList");
                          nav("/dashboard/NoteList");
                        } else {
                          setCurrentPage("yourNote");
                          nav("/dashboard");
                        }
                      }}
                      type="button"
                      className="w-[6rem] h-[2rem] font-bold rounded-lg bg-primary hover:opacity-80"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </main>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
