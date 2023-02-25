import Products from "./Products";

const Form = ({ form, setForm }) => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center gap-6 md:flex-row lg:flex-row lg:justify-around flex-wrap text-lg ">
        <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
          <label className="w-24">
            {" "}
            Name <span className="text-red-400 text-xl">*</span> :{" "}
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            placeholder="Your Name"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <div className=" p-3 flex items-start flex-col justify-center  gap-1 ">
          <label className="w-32">
            {" "}
            Last Name <span className="text-red-400 text-xl">*</span> :{" "}
          </label>
          <input
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            type="text"
            placeholder="Your Last Name"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
          <label className="w-32">
            {" "}
            Email <span className="text-red-400 text-xl">*</span> :{" "}
          </label>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="text"
            placeholder="something@gmail.com"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
          <label className="w-32"> Phone : </label>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            type="text"
            placeholder="+98 1234 567"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
          <label className="w-32"> Address : </label>
          <input
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            type="text"
            placeholder="Your Address"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
          <label className="w-32"> Postal Code : </label>
          <input
            value={form.postalCode}
            onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
            type="number"
            placeholder="00000"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
          <label className="w-32"> Date : </label>
          <input
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            type="date"
            placeholder="DD/MM/YYYY"
            className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
          />
        </div>
        <Products form={form} setForm={setForm}  />
      </div>
    </div>
  );
};

export default Form;
