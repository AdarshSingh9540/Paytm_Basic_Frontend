import { Link } from "react-router-dom";

export const Appbar = () => {
    const firstName = localStorage.getItem("firstName");
    const firstLetter = firstName ? firstName.charAt(0) : '';
  
    return (
      <div className="shadow h-14 flex justify-between">
       <Link to={"/dashboard"} className="cursor-pointer">
       <div className="flex flex-col justify-center h-full ml-4 font-bold">
          PayTM App
        </div>
       </Link>
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-4 font-serif font-semibold">
            Hello {firstName}
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl font-bold">
              {firstLetter}
            </div>
          </div>
        </div>
      </div>
    );
  };
  