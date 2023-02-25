import CustomerEditPage from "@/components/templates/CustomerEditPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const CustomerDetails = () => {
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;
  const [data, setData] = useState(null);
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((customer) => setData(customer.data));
      console.log(data);
    }
  }, [isReady]);
  if (isReady && data !== null) return (
    <>
     
        <CustomerEditPage data={data} id={customerId} />


    </>
  );
};
export default CustomerDetails;
