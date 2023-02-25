import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CustomerCard = ({ name, lastName, email, phone, _id }) => {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = axios.delete(`api/delete/${_id}`);
    const { data } = await res;
    console.log(res);
    if ((await data.status) == "failed") {
      toast.error(await data.message , {
        position: "top-center" ,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(await data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      router.reload();
    }
  };
  return (
    <div className="w-80 h-[450px] bg-slate-200 text-black rounded-lg p-4 text-lg flex flex-col items-start justify-between py-4">
      <p>
        <p className="text-lg font-semibold "> Name : </p>
        {name} {lastName}
      </p>
      <p>
        <p className="text-lg font-semibold "> Email : </p>
        {email}
      </p>
      <p>
        <p className="text-lg font-semibold "> Phone : </p>
        {phone}
      </p>
      <div className="w-full flex items-center justify-center gap-0 mb-[-60px] ">
        <button
          onClick={deleteHandler}
          className="p-4 border-[1px] w-20 h-12  text-red-500 border-red-500 hover:bg-slate-100 text-lg rounded-l-xl flex items-center justify-center"
        >
          Delete
        </button>
        <Link
          href={`/edit/${_id}`}
          className="p-4 border-y-[1px]  text-blue-500 border-blue-500  w-20 h-12 text-lg hover:bg-slate-100 flex items-center justify-center "
        >
          Details
        </Link>
        <Link
          href={`/edit/${_id}`}
          className="p-4 border-[1px]  text-green-600 w-20 h-12  border-green-600 hover:bg-slate-100 text-lg rounded-r-xl flex items-center justify-center "
        >
          Edit
        </Link>
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

export default CustomerCard;
