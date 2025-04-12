import React from "react";

function LoginPage() {
  return (
    <>
      <section className="pt-16 md:h-[90vh] flex justify-center items-center">
        <form className="w-[95%] md:w-[70%] mx-auto flex flex-col custom-shadow">
          <div className="border-b-2 flex flex-col md:flex-row gap-5 border-gray-500/10 py-5 px-5">
            <label className="text-gray-400">Student's Name</label>
            <input className="border-none outline-none" type="text" required />
          </div>
          <div
            className="border-b-2 flex flex-col md:flex-row gap-5 border-gray-500/10 py-5 px-5"
            title="password - Mobile Number + DOB(DDMMYYYY)"
          >
            <label className="text-gray-400">Roll No.</label>
            <input
              className="border-none outline-none"
              type="Number"
              required
            />
          </div>
          <div className="border-b-2 flex flex-col md:flex-row gap-5 border-gray-500/10 py-5 px-5">
            <label className="text-gray-400">Father's Name</label>
            <input className="border-none outline-none" type="text" required />
          </div>
          <div className="border-b-2 flex flex-col md:flex-row gap-5 border-gray-500/10 py-5 px-5">
            <label className="text-gray-400">Mother's Name</label>
            <input className="border-none outline-none" type="text" required />
          </div>
          <div className="border-b-2 flex flex-col md:flex-row gap-5 border-gray-500/10 py-5 px-5">
            <label className="text-gray-400">Contact No.</label>
            <input
              className="border-none outline-none"
              type="number"
              required
            />
          </div>
          <div className="border-b-2 flex flex-col md:flex-row gap-5 border-gray-500/10 py-5 px-5">
            <label className="text-gray-400">Email</label>
            <input className="border-none outline-none" type="email" required />
          </div>

          <button className="px-5 py-1 bg-amber-900 text-white rounded my-5 mx-auto">
            LogIn
          </button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;
