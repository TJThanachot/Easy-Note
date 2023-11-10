import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { TextField, MenuItem } from "@mui/material";
import customerHook from "../../hooks/customerHook";
import Swal from "sweetalert2";
import { useStore } from "../../contexts/store";
import { UploadImage } from "../../assets/icon";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CRUDCustomer({ props }: any) {
  const nav = useNavigate();
  const { createCustomer, deleteCustomer, updateCustomer } = customerHook();
  const {
    setCurrentPage,
    // avartarFile,
    setAvartarFile,
    avartarUrl,
    setAvartarUrl,
  }: any = useStore();

  const initGender: string[] = ["None", "Male", "Female", "Lgbtq+"];

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

  useEffect(() => {
    setAvartarUrl("");
  }, []);

  return (
    <div className="w-full">
      <Formik
        enableReinitialize
        initialValues={
          !props.update
            ? {
                fullname: "",
                email: "",
                gender: "None",
                tel: "",
                about: "",
                address: "",
              }
            : {
                fullname: props.fullname,
                email: props.email,
                gender: props.gender,
                tel: props.tel,
                about: props.about,
                address: props.address,
              }
        }
        //  onSubmit here ****************************************************************
        //   **************************************************
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          Swal.fire({
            title: `Are you sure to ${
              props.update ? "update" : "create"
            } customer profile?`,
            showDenyButton: true,
            confirmButtonText: "Yes confirm",
            denyButtonText: `No I'm not sure`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                `${
                  props.update ? "Update" : "Create"
                } customer profile successfully`,
                "",
                "success"
              );
              // call hook here *******************************************************
              //   ******************************************************************
              if (props.update) {
                const newValues = {
                  ...values,
                  id: props.id,
                  created_at: props.created_at,
                  avartar: props.avartar,
                };
                updateCustomer(newValues);
              } else {
                createCustomer(values);
                formikHelpers.resetForm();
                setCurrentPage("customers");
                nav("/dashboard/CustomersList");
              }
            } else if (result.isDenied) {
              Swal.fire("You canceled", "", "error");
            }
          });
        }}
        //     input validation here ****************************************************
        // ***********************************************************
        validationSchema={yup.object().shape({
          fullname: yup
            .string()
            .required("Full name is required")
            .max(20, "Full name must less than 20 character")
            .test(
              "no-inappropriate-words",
              "Full name contains inappropriate words",
              (value) => inappropriateWordsValidator(value)
            ),
          email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
          about: yup
            .string()
            .notRequired()
            .test(
              "no-inappropriate-words",
              "About contains inappropriate words",
              (value) => inappropriateWordsValidator(value)
            ),
          address: yup
            .string()
            .required("Address is required")
            .test(
              "no-inappropriate-words",
              "Address contains inappropriate words",
              (value) => inappropriateWordsValidator(value)
            ),
          tel: yup
            .string()
            .matches(
              /^0\d+$/,
              "Phone number must start with 0 and contain only numeric characters"
            )
            .required("Phone number is required")
            .test(
              "isExactlyTenCharacters",
              "Phone numbers should have exactly 10 characters",
              (value) => {
                if (value) {
                  return value.length === 10;
                }
                return true;
              }
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
                {!props.update
                  ? "New Customer Profile"
                  : "Update Customer Profile"}
              </h1>
              <main className="flex flex-col gap-[1rem] w-full bg-white p-[2rem] rounded-lg">
                {/* upload avartar ****************************************************************
                 ************************************************************** */}
                <div className="h-[17rem] max-sm:flex justify-center px-[8%] max-sm:px-0">
                  <UploadImage
                    img={
                      avartarUrl
                        ? avartarUrl
                        : props.avartar
                        ? props.avartar
                        : null
                    }
                    onChange={async (e: any) => {
                      setAvartarFile(e.target.files[0]);
                      const imgUrl = URL.createObjectURL(e.target.files[0]);
                      setAvartarUrl(imgUrl);
                    }}
                  />
                </div>
                <div className="w-full flex justify-between gap-[2rem]">
                  <label
                    className="font-bold flex flex-col w-[50%] gap-[1rem]"
                    htmlFor="fullname"
                  >
                    Full name
                    <Field
                      as={TextField}
                      variant="outlined"
                      error={
                        Boolean(errors.fullname) && Boolean(touched.fullname)
                      }
                      helperText={Boolean(touched.fullname) && errors.fullname}
                      placeholder="customer full name"
                      name="fullname"
                      type="text"
                    />
                  </label>
                  <label
                    className="font-bold flex flex-col w-[50%] gap-[1rem]"
                    htmlFor="email"
                  >
                    Email
                    <Field
                      as={TextField}
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) && errors.email}
                      variant="outlined"
                      placeholder="customer email"
                      name="email"
                      type="text"
                    />
                  </label>
                </div>
                <div className="w-full flex justify-between gap-[2rem]">
                  <label
                    className="font-bold flex flex-col w-[50%] gap-[1rem]"
                    htmlFor="tel"
                  >
                    Tel.
                    <Field
                      as={TextField}
                      error={Boolean(errors.tel) && Boolean(touched.tel)}
                      helperText={Boolean(touched.tel) && errors.tel}
                      variant="outlined"
                      placeholder="phone numbers"
                      name="tel"
                      type="text"
                    />
                  </label>
                  <label
                    className="font-bold flex flex-col w-[50%] gap-[1rem]"
                    htmlFor="gender"
                  >
                    Select gender
                    <Field select name="gender" as={TextField}>
                      {initGender.map((item: string) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Field>
                  </label>
                </div>
                <label className="font-bold" htmlFor="about">
                  About
                </label>
                <Field
                  as={TextField}
                  error={Boolean(errors.about)}
                  helperText={Boolean(touched.about) && errors.about}
                  placeholder="customer about..............."
                  name="about"
                  multiline
                  rows={4}
                  cols={80}
                ></Field>
                <label className="font-bold" htmlFor="address">
                  Address
                </label>
                <Field
                  as={TextField}
                  error={Boolean(errors.address) && Boolean(touched.address)}
                  helperText={Boolean(touched.address) && errors.address}
                  placeholder="customer address..............."
                  name="address"
                  multiline
                  rows={4}
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
                          title: `Are you sure to delete customer?`,
                          showDenyButton: true,
                          confirmButtonText: "Yes confirm",
                          denyButtonText: `No I'm not sure`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire(
                              `delete customer successfully`,
                              "",
                              "success"
                            );
                            deleteCustomer(props.id);
                            setCurrentPage("customers");
                            nav("/dashboard/CustomersList");
                          } else if (result.isDenied) {
                            Swal.fire("You canceled", "", "error");
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  ) : null}
                  <div className="flex gap-[2rem] justify-end w-full max-sm:gap-2 max-sm:w-[65%]">
                    <button
                      type="submit"
                      className="w-[6rem] h-[2rem] font-bold rounded-lg bg-primary hover:opacity-80"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => {
                        setAvartarUrl("");
                      }}
                      type="reset"
                      className="w-[6rem] h-[2rem] font-bold rounded-lg bg-primary hover:opacity-80"
                    >
                      Reset
                    </button>
                    <button
                      onClick={() => {
                        setCurrentPage("customers");
                        nav("/dashboard/CustomersList");
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
