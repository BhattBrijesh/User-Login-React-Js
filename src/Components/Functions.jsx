import axios from "axios";
import toast from "react-hot-toast";
const baseUrl = import.meta.env.VITE_BASE_URL;
console.log("import.meta.env.baseUrl;", import.meta.env);
const api = axios.create({
  baseURL: "http://localhost:8000",
});
export async function handleCreateUser(reqBody = {}) {
  const tostId = toast.loading("Loading...");
  try {
    const res = await axios.post(`${baseUrl}/api/createUser`, reqBody);

    return res;
  } catch (error) {
    toast.error(error?.message);
  } finally {
    toast.dismiss(tostId);
  }
}
export async function handleUserLogin(reqBody = {}) {
  const toastId = toast.loading("Loading...");
  try {
    const res = await api.post(`${baseUrl}/api/userLogin`, reqBody);
    return res;
  } catch (error) {
    toast.error(error?.message);
  } finally {
    toast.dismiss(toastId);
  }
}
export async function getUserDetail() {
  try {
    const res = await axios.get(`${baseUrl}/api/getUserDetail`);
    return res;
  } catch (error) {
    console.log(error?.message);
  }
}
