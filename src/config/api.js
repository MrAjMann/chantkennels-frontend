// Coonection to the Backend
import axios from "axios";

const setApiUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_API_URL
  }

  if (process.env.NODE_ENV === "development") {
    return process.env.REACT_APP_API_URL || "http://localhost:4000/"
  }
}

const chantKennelsApi=axios.create({
  baseURL: setApiUrl()
})
chantKennelsApi.interceptors.request.use(req => {
  const token = localStorage.getItem("token")
  //console.log("interceptor token: ", token)
  if (token) {
      req.headers["Authorization"] = `Bearer ${token}`
  }
  return req
})

export default chantKennelsApi;
