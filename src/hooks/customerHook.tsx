import { useStore } from "../contexts/store";
import moment from "moment";

export default function customerHook() {
  const { setAllCustermer }: any = useStore();

  function getCustomersList(): void {
    // try {
    //     const resutl = await axios.get("----------------------------------")
    //     setMockCustomers(resutl)
    // } catch (err) {
    //     console.log(err)
    // }
    const storedCustomer: any = localStorage.getItem("customers");
    const result = JSON.parse(storedCustomer);
    setAllCustermer(result);
  }

  function createCustomer(values: any): any {
    // if have API GET ****************************************************
    const newValues = {
      ...values,
      created_at: moment(new Date()).format("DD/MM/YYYY"),
      updated_at: moment(new Date()).format("DD/MM/YYYY"),
    };
    // try {
    //   const result = await axios.post("----------------------------------",newValues)
    // } catch (err) {
    //   console.log(err)
    // }
    const storedCustomer = localStorage.getItem("customers");
    let newResult;
    if (storedCustomer !== null) {
      const result = JSON.parse(storedCustomer);
      newValues.id = result[result.length - 1].id + 1;
      newResult = result;
      newResult.push(newValues);
    } else {
      newValues.id = 1;
      newResult = [];
      newResult.push(newValues);
    }

    localStorage.setItem("customers", JSON.stringify(newResult));
    setAllCustermer(newResult);
    console.log("created customer successfully");
  }

  function updateCustomer(values: any) {
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
    const storedCustomer = localStorage.getItem("customers");
    if (storedCustomer !== null) {
      const result = JSON.parse(storedCustomer);
      const newResult = result.map((item: any) => {
        if (item.id === newValues.id) {
          item = newValues;
        }
        return item;
      });
      localStorage.setItem("customers", JSON.stringify(newResult));
      setAllCustermer(newResult);
    }
    console.log("updated customer successfully");
  }

  function deleteCustomer(id: number) {
    // if have API GET ****************************************************
    // try {
    //   const result = await axios.delete("----------------------------------"+id)
    // } catch (err) {
    //   console.log(err)
    // }
    const storedCustomer = localStorage.getItem("customers");
    if (storedCustomer !== null) {
      const result = JSON.parse(storedCustomer);
      const newResult = result.filter((item: any) => {
        return item.id !== id;
      });

      if (newResult.length < 1) {
        localStorage.removeItem("customers");
        setAllCustermer([]);
      } else {
        localStorage.setItem("customers", JSON.stringify(newResult));
        setAllCustermer(newResult);
      }
    }
    console.log("deleted customer successfully");
  }

  // hook for CustomerList page *****************************************
  function filterByCustomerName(fullname: string, address: string) {
    const storedCustomer: any = localStorage.getItem("customers");
    const result = JSON.parse(storedCustomer);
    if (!fullname || (!fullname && !address)) {
      setAllCustermer(result);
    }
    if (fullname && address) {
      const NewResult = result.filter((item: any) => {
        return (
          item.fullname.includes(fullname) &&
          item.address.toLowerCase().includes(address.toLowerCase())
        );
      });
      setAllCustermer(NewResult);
    } else {
      const NewResult = result.filter((item: any) => {
        return item.fullname.includes(fullname);
      });
      setAllCustermer(NewResult);
    }
  }
  // hook for CustomerList page *****************************************
  function filterByAddress(address: string, fullname: string) {
    const storedCustomer: any = localStorage.getItem("customers");
    const result = JSON.parse(storedCustomer);
    if (!address || (!address && !fullname)) {
      setAllCustermer(result);
    }
    if (address && fullname) {
      const NewResult = result.filter((item: any) => {
        return (
          item.address.toLowerCase().includes(address.toLowerCase()) &&
          item.fullname.includes(fullname)
        );
      });
      setAllCustermer(NewResult);
    } else {
      const NewResult = result.filter((item: any) => {
        return item.address.toLowerCase().includes(address.toLowerCase());
      });
      setAllCustermer(NewResult);
    }
  }

  return {
    getCustomersList,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    filterByAddress,
    filterByCustomerName,
  };
}
