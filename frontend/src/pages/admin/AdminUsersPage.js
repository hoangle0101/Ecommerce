import UsersPageComponent from "./components/UsersPageComponent";

import axios from "axios";

const fetchUsers = async (abctrl) => {
    const {data} = await axios.get("/api/users", {
        signal: abctrl.signal,
    });
    return data
}


  

const deleteUser = async (userId) => {
    try {
        const { data } = await axios.delete(`/api/users/${userId}`);
        return data;
    } catch (error) {
        console.error("Error deleting user:", error.response.data);
        throw error; // Đảm bảo rằng lỗi được chuyển tiếp để có thể xem ở phía client.
    } 
}

const AdminUsersPage = () => {
  return <UsersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;

