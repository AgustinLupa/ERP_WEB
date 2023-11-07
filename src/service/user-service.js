import { GET } from "./http";

export const get_all_user=async (data) =>{

    const uri = "users";

    let resp = await GET(uri,data);

    return resp;
}