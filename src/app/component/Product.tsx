import React from "react";

function Product() {
  return (
    <>
      <div className="py-20 bg-white px-10">
        <h1 className="text-5xl text-center font-roboto font-bold">Products</h1>
        <p className="text-center mt-5">
          Lead Generation, Appointment Setting, Product Display, <br />
          Feedback & Ratings, Ticket Generation, Custom Query Handling, Simple
          CRM
        </p>
        <div>
          <div className="mt-24 flex justify-center gap-10">
            <div className="bg-white w-[600px] shadow-xl rounded-2xl px-10 py-16 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <h1 className="text-xl text-center font-roboto font-bold">
                HeenaGPT
              </h1>
              <p className="text-center font-roboto mt-3">
                HeenaGPT is our advanced chatbot solution powered by <br />
                our Heena AI Technology. Extensively trained on FAQs relevant
                <br />
                to your business, HeenaGPT seamlessly answers user queries{" "}
                <br />
                and refers to ChatGPT/LLMs for queries it is unable to answer.
              </p>
            </div>
            <div className="bg-white w-[600px] shadow-xl rounded-2xl px-10 py-16 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <h1 className=" text-xl text-center font-roboto font-bold">
                HeenaRAG
              </h1>
              <p className="text-center font-roboto mt-3">
                HeenaRAG combines our Heena AI and cutting-edge RAG <br />
                (retrieval augmented generation) Pattern AI. No training <br />
                needed – it directly accesses your knowledge database, swiftly{" "}
                <br />
                retrieving and converting data into precise responses with
                ChatGPT/LLMs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
