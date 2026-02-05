import { Link, Outlet } from "react-router-dom";
import { asset } from "../../assets/asset";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const RecruiterLayout = () => {
  const {navigate,setRecruiter,setAdmin,axios} = useContext(AppContext);
    const sidebarLinks = [
        {name:"Categories",path:"/admin"},
        { name: "Add-category", path: "/admin/AddCategory" },
        {name:"Companies",path:'/admin/AllCompanies'},
        { name: "Jobs", path: "/admin/Jobs" },
        {name:"All-users",path:"/admin/AllUsers"},
        {name:"Applications",path:"/admin/AllApplications"}
    ];
    const logout = async()=>{
            try{
                const {data} = await axios.post('http://localhost:4000/auth/logout',{withCredentials:true});
                if(data.success){
                    setAdmin(false);
                    navigate('/');
                    toast.success(data.message);
                }
            }
            catch(error){
                toast.error(error.response.data.message);
            }
        }
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
               <Link to={'/'}>
               <img src={asset.jobofind} alt="joboFind logo" className="h-13 w-30" />
               </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1 cursor-pointer' onClick={logout}>Logout</button>
                </div>
            </div>
            <div className="flex">
              <div className="md:w-64 w-16 border-r h-137.5 text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <a href={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        {item.icon}
                        <p className="md:block hidden text-center">{item.name}</p>
                    </a>
                ))}
            </div>
            <Outlet/>
            </div>
            
        </>
    );
};
export default RecruiterLayout;