import chantKennelsApi from '../config/api'

export async function userLogin(data) {
	console.log("inside user login service")
	const res= await chantKennelsApi.post("/user/auth/signin",data)
	console.log("res",res)
	// return {...res.data,isAdmin:"false"}
	return {...res.data}
    
	// return {
	// 	username: "Test",
    //     isEmployer:false,
	// 	jwt: "token"
	// }
}


export async function userSignUp(data) {
	const res= await chantKennelsApi.post("/user/auth/register",data)
	console.log("res",res)
	// return {...res.data,isEmployer:"false"}
	return {...res.data}
	// return {
	// 	username: "Test",
    //     isEmployer:false,
	// 	jwt: "token"
	// }
}

export async function logOut(data) {
	return data.userName
}