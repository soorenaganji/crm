import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";
export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
    return;
  }
  const { customerId } = req.query;
  if (req.method === "GET") {
    try {
      const customer = await Customer.findById(customerId);
      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in internal server" });
    }
  }
}
