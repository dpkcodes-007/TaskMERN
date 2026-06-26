import React, { useState } from "react";

const StudentTask = () => {
  const [studentInput, setStudentInput] = useState({
    studentName: "",
    studentAge: "",
    studentCourse: "",
    studentCity: "",
  });

  const [studentDetails, setStudentDetails] = useState([]);

  const handleStudentFomm = (e) => {
    setStudentInput({ ...studentInput, [e.target.name]: e.target.value });
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setStudentDetails((prev) => [...prev, studentInput]);
    alert("Student Registered Successfully!");
    setStudentInput({
      studentName: "",
      studentAge: "",
      studentCourse: "",
      studentCity: "",
    });
  };

  return (
    <>
      <div className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-slate-900/20 sm:p-8">
          <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
            Student Enrollment Form
          </h1>

          <form
            onSubmit={handleStudentSubmit}
            className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-inner"
          >
            <input
              type="text"
              placeholder="Student Name"
              name="studentName"
              value={studentInput.studentName}
              onChange={handleStudentFomm}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

            <input
              type="number"
              placeholder="Student Age"
              name="studentAge"
              value={studentInput.studentAge}
              onChange={handleStudentFomm}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

            <input
              type="text"
              placeholder="Course"
              name="studentCourse"
              value={studentInput.studentCourse}
              onChange={handleStudentFomm}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

            <input
              type="text"
              placeholder="City"
              name="studentCity"
              value={studentInput.studentCity}
              onChange={handleStudentFomm}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />

            <input
              type="submit"
              value="Enroll"
              className="cursor-pointer rounded-lg bg-cyan-600 px-6 py-2.5 font-semibold text-white transition hover:bg-cyan-500"
            />
          </form>
        </div>
      </div>

      <div className="px-4 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-900/10 sm:p-8">
          <h2 className="mb-5 text-center text-2xl font-semibold text-slate-800">
            Enrolled Students
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center text-slate-700">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-2">ID</th>
                  <th className="border border-slate-300 p-2">Name</th>
                  <th className="border border-slate-300 p-2">Age</th>
                  <th className="border border-slate-300 p-2">Course</th>
                  <th className="border border-slate-300 p-2">City</th>
                </tr>
              </thead>

              <tbody>
                {studentDetails.map((e, i) => (
                  <tr key={i}>
                    <td className="border border-slate-300 p-2">{i + 1}</td>
                    <td className="border border-slate-300 p-2">{e.studentName}</td>
                    <td className="border border-slate-300 p-2">{e.studentAge}</td>
                    <td className="border border-slate-300 p-2">{e.studentCourse}</td>
                    <td className="border border-slate-300 p-2">{e.studentCity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentTask;