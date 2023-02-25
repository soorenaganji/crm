import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import connectDB from "@/utils/connectDB";
import Customer from "@/models/customer";
import HomePage from "@/components/templates/HomePage";
const inter = Inter({ subsets: ["latin"] });

export default function Home ({ customers }) {
  return (
    <>
      <main className="h-100">
        <HomePage customers={customers} />
      </main>
    </>
  );
}
export async function getServerSideProps () {
        try {
          await connectDB()
          const customers = await Customer.find()
          return {
            props : {
              customers : JSON.parse(JSON.stringify(customers))
            }
          }
        }catch (err) {
          return {
            notFound : true
          }
        }
  }