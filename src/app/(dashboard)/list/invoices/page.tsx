'use client'
import React, { ChangeEvent, useState, useRef } from "react";
import Table from "@/components/Table";

type Customer = {
   name: string,
   address: string,
}

type Product = {
   name: string,
   quantity: number,
   unitPrice: number,
}

type PaymentMode = 'cash' | 'online';

type PrintableInvoiceProps = {
   customer: Customer;
   products: Product[];
   subtotal: number;
   gstAmount: number;
   total: number;
   gstRate: number;
   paymentMode: PaymentMode;
};

//Print the invoice ot the recipt
const PrintableInvoice: React.FC<PrintableInvoiceProps> = ({
   customer,
   products,
   subtotal,
   gstAmount,
   total,
   gstRate,
   paymentMode,
}) => (
   <div className="p-4">
      <h2 className="text-center">ABC Supermarket</h2>
      <p>
         <strong>Customer Name:</strong> {customer.name}
      </p>
      <p>
         <strong>Address:</strong> {customer.address}
      </p>
      <table className="w-full border-collapse" style={{ borderSpacing: "10px" }}>
   <thead>
      <tr>
         <th className="p-2 border-b">Product</th>
         <th className="p-2 border-b">Quantity</th>
         <th className="p-2 border-b">Unit Price</th>
         <th className="p-2 border-b">Total</th>
      </tr>
   </thead>
   <tbody>
      {products.map((product, index) => (
         <tr key={product.name}>
            <td className="p-2 border-b">{product.name}</td>
            <td className="p-2 border-b">{product.quantity}</td>
            <td className="p-2 border-b">{product.unitPrice}</td>
            <td className="p-2 border-b">{product.quantity * product.unitPrice}</td>
         </tr>
      ))}
   </tbody>
</table>

      <hr />
      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      <p>GST ({gstRate}%): ₹{gstAmount.toFixed(2)}</p>
      <p>
         <strong>Total: ₹{total.toFixed(2)}</strong>
      </p>
      <p>
         <strong>Payment Mode:</strong> {paymentMode.toUpperCase()}
      </p>
   </div>
);




const InvoiceGenerator: React.FC = () => {
   const [customer, setCustomer] = useState<Customer>({ name: "", address: "" });
   const [products, setProducts] = useState<Product[]>([{ name: '', quantity: 0, unitPrice: 0 }]);
   const [gstRate, setGstRate] = useState<number>(18);
   const [showPrintable, setShowPrintable] = useState(false);
   const [paymentMode, setPaymentMode] = useState<PaymentMode>('cash');
   const printableRef = useRef<HTMLDivElement>(null);

   const handleCustomerChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
   }

   const handleProductChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const updatedProducts = [...products];
      updatedProducts[index] = { ...updatedProducts[index], [name]: name === "quantity" || name === "unitPrice" ? Number(value) : value };
      setProducts(updatedProducts);
   };

   const addProduct = () => {
      setProducts([...products, { name: "", quantity: 0, unitPrice: 0 }]);
   }

   const deleteProduct = (index: number) => {
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
   }

   const calculateTotal = () => {
      const subtotal = products.reduce((sum, product) => sum + product.quantity * product.unitPrice, 0);
      const gstAmount = (subtotal * gstRate) / 100;
      return { subtotal, gstAmount, total: subtotal + gstAmount };
   }

   const handlePrint = () => {
      setShowPrintable(true);
      setTimeout(() => {
         if (printableRef.current) {
            const content = printableRef.current;
            const printWindow = window.open('', '_blank');
            if (printWindow) {
               printWindow.document.write('<html><head><title>Print Invoice</title></head><body>');
               printWindow.document.write(content.innerHTML);
               printWindow.document.write('</body></html>');
               printWindow.document.close();
               printWindow.print();
               printWindow.close();
            }
         }
         setShowPrintable(false);
      }, 100);
   };

   const { subtotal, gstAmount, total } = calculateTotal();

   return (
      <>
         <div className="bg-white p-4 rounded-md m-4 mt-0 flex-1">
            <h1 className="text-xl font-semibold text-center">ABC Supermarket</h1>
            <div className="flex md:flex-row flex-col justify-evenly mt-4">

               <div className="flex flex-col gap-8">
                  <h1 className="text-lg text-gray-550 text-center">Customer Details</h1>
                  <input
                     type="text"
                     placeholder="Name"
                     name="name"
                     value={customer.name}
                     onChange={handleCustomerChange}
                     className="p-2 outline-none ring-[1.5px] ring-gray-500 rounded-md bg-gray-300"
                  />
                  <input
                     type="text"
                     placeholder="Address"
                     name="address"
                     value={customer.address}
                     onChange={handleCustomerChange}
                     className="p-2 outline-none ring-[1.5px] ring-gray-500 rounded-md bg-gray-300"
                  />
                  <div className="flex flex-col gap-2">
                     <label className="text-lg text-gray-550">Payment Mode:</label>
                     <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                           <input
                              type="radio"
                              name="paymentMode"
                              value="cash"
                              checked={paymentMode === 'cash'}
                              onChange={(e) => setPaymentMode(e.target.value as PaymentMode)}
                              className="form-radio"
                           />
                           Cash
                        </label>
                        <label className="flex items-center gap-2">
                           <input
                              type="radio"
                              name="paymentMode"
                              value="online"
                              checked={paymentMode === 'online'}
                              onChange={(e) => setPaymentMode(e.target.value as PaymentMode)}
                              className="form-radio"
                           />
                           Online
                        </label>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-8">
                  <h1 className="text-lg text-gray-550 text-center">Product Details</h1>
                  {products.map((product, index) => (
                     <div key={index} className="flex md:flex-row flex-col gap-6 items-center">
                        <input
                           placeholder="Name"
                           name="name"
                           value={product.name}
                           onChange={(e) => handleProductChange(index, e)}
                           className="p-2 outline-none ring-[1.5px] ring-gray-500 rounded-md bg-gray-300"
                        />
                        <input
                           type="number"
                           placeholder="Quantity"
                           name="quantity"
                           value={product.quantity}
                           onChange={(e) => handleProductChange(index, e)}
                           className="p-2 outline-none ring-[1.5px] ring-gray-500 rounded-md bg-gray-300"
                        />
                        <input
                           type="number"
                           placeholder="Unit Price"
                           name="unitPrice"
                           value={product.unitPrice}
                           onChange={(e) => handleProductChange(index, e)}
                           className="p-2 outline-none ring-[1.5px] ring-gray-500 rounded-md bg-gray-300"
                        />
                        <button
                           onClick={() => deleteProduct(index)}
                           className="bg-yellow text-gray p-2 rounded-md"
                        >
                           Delete
                        </button>
                     </div>
                  ))}
                  <button
                     className="w-[150px] h-10 bg-purple rounded-md"
                     onClick={addProduct}
                  >
                     Add Product
                  </button>
               </div>
            </div>

            <div className="border-t-2 border-black mt-4 flex gap-2 flex-col">
               <h3 className="text-lg font-semibold">Summary</h3>
               <hr />
               <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
               <p>GST ({gstRate}%): ₹{gstAmount.toFixed(2)}</p>
               <hr />
               <p><strong>Total: ₹{total.toFixed(2)}</strong></p>
               <p><strong>Payment Mode:</strong> {paymentMode.toUpperCase()}</p>
               <button
                  onClick={handlePrint}
                  className="bg-green-500 text-black p-2 rounded-md w-[150px] mt-4"
               >
                  Print Invoice
               </button>
            </div>
         </div>

         {showPrintable && (
            <div style={{ display: 'none' }} ref={printableRef}>
               <PrintableInvoice
                  customer={customer}
                  products={products}
                  subtotal={subtotal}
                  gstAmount={gstAmount}
                  total={total}
                  gstRate={gstRate}
                  paymentMode={paymentMode}
               />
            </div>
         )}
      </>
   );
}

export default InvoiceGenerator;