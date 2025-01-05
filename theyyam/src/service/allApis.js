
import {BASEURL} from './baseUrl'
import { commonRequest } from './commonRequest'

const createPost=async(body,headers)=>{
    return await commonRequest("POST",`${BASEURL}/post`,body,headers)
}

export const viewAllPost=async()=>{
    return await commonRequest("GET",`${BASEURL}/get`,'','')
}