import CustomerCard from "../modules/CustomerCard";

const HomePage = ({ customers }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:flex-wrap">
      {customers.length ? (
        customers.map((customer) => (
          <CustomerCard {...customer} key={customer._id} />
        ))
      ) : (
        <h2 className="my-64 text-center text-4xl text-slate-400">
          Nothing To Show here
        </h2>
      )}
    </div>
  );
};

export default HomePage;
