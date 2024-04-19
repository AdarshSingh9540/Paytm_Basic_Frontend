import { useState, useEffect} from "react";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
   
    useEffect(() => {
        axios.get(`https://paytm-basic-backend.vercel.app/api/v1/user/bulk`)
            .then(response => {
                setUsers(response?.data?.user || []);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

   
    const filteredUsers = users.filter(user => {
        return user.firstname.toLowerCase().includes(filter.toLowerCase()) || 
               user.lastname.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <>
            <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input 
                    onChange={(e) => setFilter(e.target.value)} 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full px-2 py-1 border rounded border-slate-200" 
                />
            </div>
            <div>
                {filteredUsers.map(user => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {

    const navigate = useNavigate();
    if (!user) return null; 
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user?.firstname && user?.firstname[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-ful">
                    <div>{user?.firstname} {user?.lastname}</div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <Button onClick={(e)=>{
                    navigate("/send?id="+user._id+"&name="+ user.firstname)
                }} label={"Send Money"} />
            </div>
        </div>
    );
}
