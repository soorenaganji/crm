import Form from "@/components/modules/Form";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CustomerEditPage = ({ data, id }) => {
  const [form, setForm] = useState(data);
  const router = useRouter();
  const saveHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.status == "success") {
      toast.success(res.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error(res.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    router.push("/");
  };
  return (
    <div>
      <Form form={form} setForm={setForm} />
      <div className="w-full mt-32 items-center justify-end pr-16 gap-6 flex">
        <button className="px-6 border-[1px] py-3 text-lg rounded-lg border-red-400 text-red-400 ">
          Cancel
        </button>
        <button
          onClick={() => saveHandler()}
          className="px-6 bg-green-400 text-black py-3 text-lg rounded-lg "
        >
          Save Changes
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CustomerEditPage;
