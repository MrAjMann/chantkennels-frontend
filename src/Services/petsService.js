import chantAPI from "../config/api";

export async function getPets() {
  const response = await chantAPI.get("users/");
  console.log(response);
  return response;
}
