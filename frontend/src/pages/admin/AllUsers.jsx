import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [student, setStudent] = useState([]);
  const { axios } = useContext(AppContext);

  const fetchAllStudents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/user/allStudents",
        { withCredentials: true }
      );

      if (data.success) {
        setStudent(data.students);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium text-gray-800 mb-4">
        Students List
      </h2>

      <div className="overflow-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Education</th>
              <th className="px-4 py-2">Exp</th>
              <th className="px-4 py-2">Skills</th>
              <th className="px-4 py-2">Bio</th>
              <th className="px-4 py-2">Resume</th>
            </tr>
          </thead>

          <tbody>
            {student.length > 0 ? (
              student.map((stu) => (
                <tr key={stu._id} className="border-t">
                  <td className="px-4 py-2">
                    {stu.image ? (
                      <img
                        src={`http://localhost:4000/uploads/${stu.image}`}
                        alt="profile"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-2">{stu.name}</td>
                  <td className="px-4 py-2">{stu.email}</td>
                  <td className="px-4 py-2">{stu.phone || "-"}</td>
                  <td className="px-4 py-2">{stu.location || "-"}</td>
                  <td className="px-4 py-2">{stu.education || "-"}</td>
                  <td className="px-4 py-2">{stu.experience || "-"}</td>
                  <td className="px-4 py-2">
                    {Array.isArray(stu.skills)
                      ? stu.skills.join(", ")
                      : stu.skills || "-"}
                  </td>
                  <td className="px-4 py-2">{stu.bio && stu.bio !== "undefined" ? stu.bio : "-"}</td>
                  <td className="px-4 py-2">
                    {stu.resume ? (
                      <a
                        href={`http://localhost:4000/uploads/${stu.resume}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        Resume
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-6 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
