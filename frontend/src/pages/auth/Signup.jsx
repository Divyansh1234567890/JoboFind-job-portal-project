import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
const Signup = () => {
  const { navigate, axios } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });
  const handleChange = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setSignupFormData({ ...signupFormData, image: selectedFile });
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formPayLoad = new FormData();
      formPayLoad.append("name", signupFormData.name);
      formPayLoad.append("email", signupFormData.email);
      formPayLoad.append("password", signupFormData.password);
      formPayLoad.append("role", signupFormData.role);
      formPayLoad.append("image", signupFormData.image);
      const { data } = await axios.post(
        "http://localhost:4000/auth/signup",
        formPayLoad,
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      const message = error.response?.data?.message || "something went wrong";
      toast.error(message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          signup Now
        </h2>

        <div className="w-full my-4">
          {preview && (
            <div className="mb-3 flex justify-center">
              <img
                src={preview}
                alt=""
                className="w-24 h-24 rounded-full border shadow"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        <input
          id="name"
          name="name"
          onChange={handleChange}
          value={signupFormData.name}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          id="email"
          name="email"
          onChange={handleChange}
          value={signupFormData.email}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />

        <input
          id="password"
          name="password"
          onChange={handleChange}
          value={signupFormData.password}
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />

        <select
          name="role"
          value={signupFormData.role}
          onChange={handleChange}
          className="w-full border my-3 rounded-full py-2 px-4"
        >
          <option value="">Select role</option>
          <option value="student">Student</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <button
          type="submit"
          className="w-full mb-3 bg-blue-500 hover:bg-blue-700/90 active:scale-95 transition py-2.5 rounded-full text-white cursor-pointer"
        >
          signup
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">
            login Now
          </a>
        </p>
      </form>
    </div>
  );
};
export default Signup;
