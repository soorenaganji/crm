import CustomerCard from "../modules/CustomerCard";

const HomePage = ({ customers }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:flex-wrap">
      {customers.map((customer) => (
        <CustomerCard {...customer} key={customer._id} />
      ))}
    </div>
  );
};

export default HomePage;
