const Products = ({ form, setForm }) => {
  const { products } = form;
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="w-full p-12 flex items-center justify-center flex-col border-2 border-slate-700 rounded-xl  ">
      <h4 className="text-2xl mb-16">Purchased Products</h4>
      {products.map((product, index) => (
        <div
          className="flex items-end justify-center gap-4 flex-wrap bg-slate-800 p-6 rounded-xl my-4"
          key={index}
        >
          <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
            <label className="w-24"> Name : </label>
            <input
              name="name"
              value={product.name}
              onChange={(e) => changeHandler(e, index)}
              type="text"
              className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
            />
          </div>
          <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
            <label className="w-24"> Price : </label>
            <input
              name="price"
              value={product.price}
              onChange={(e) => changeHandler(e, index)}
              type="number"
              className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
            />
          </div>
          <div className=" p-3 flex items-start flex-col justify-center  gap-3 ">
            <label className="w-24"> QTY : </label>
            <input
              name="qty"
              value={product.qty}
              onChange={(e) => changeHandler(e, index)}
              type="number"
              className="w-80 lg:w-100 lg:h-16 h-14 p-2 text-lg rounded-lg border-[1px] border-green-400 bg-slate-700 outline-none "
            />
          </div>
          <div className=" p-3 flex items-center flex-col justify-center h-full ">
            <button
              className="px-6 h-14 lg:h-16 hover:bg-red-400 hover:text-black border-[1px] py-3 text-lg rounded-lg border-red-400 text-red-400 "
              onClick={() => deleteHandler(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        className="px-6 border-[1px] text-green-400 border-green-400 hover:bg-slate-800 py-3 text-lg rounded-lg mt-16 "
        onClick={addHandler}
      >
        Add Item
      </button>
    </div>
  );
};

export default Products;
