export const UserServer = `http://localhost:8000`
const token = localStorage.getItem('token')

export const config = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
};

