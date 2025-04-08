import React from "react";

function LoginPage() {
  return (
    <>
      <form>
        <div>
          <label>Student Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Roll No.</label>
          <input type="Number" required />
        </div>
        <div>
          <label>Father's Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Mother's Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Contact No.</label>
          <input type="number" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
      </form>
    </>
  );
}

export default LoginPage;
