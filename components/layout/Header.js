import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-32 px-16 lg:px-32 py-4 flex items-center justify-between mb-32 ">
      <h1 className="text-3xl lg:text-5xl font-bold  "> <Link href={"/"} >CRM</Link></h1>
      <Link href={"/add-customer"}  className="p-4 rounded-lg border-green-300 border-[1px] text-green-300 hover:bg-green-400 hover:text-black bg-slate-800 hover:shadow-xl hover:shadow-green-900">
        Add Customer
      </Link>
    </div>
  );
};

export default Header;
