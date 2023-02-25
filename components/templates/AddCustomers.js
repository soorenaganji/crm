import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../modules/Form";

const AddCustomers = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    postalCode: "",
    phone: "",
    address: "",
    date : "",
    products : []
  });
  const saveHandler = async () => {
    const res = await axios.post("/api/customer", { data: form });
    console.log(res);
    if (res.status == 201) {
      router.push("/");
    }
  };
  const cancelHandler = () => {
      router.push("/");
  };
  return (
    <div>
      <Form form={form} setForm={setForm} />
      <div className="w-full mt-32 items-center justify-end pr-16 gap-6 flex">
        <button
          className="px-6 border-[1px] py-3 text-lg rounded-lg border-red-400 text-red-400 "
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="px-6 bg-green-400 text-black py-3 text-lg rounded-lg "
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCustomers;
