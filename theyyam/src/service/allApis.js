
import {BASEURL} from './baseUrl'
import { commonRequest } from './commonRequest'

const createPost=async(body,headers)=>{
    return await commonRequest("POST",`${BASEURL}/post`,body,headers)
}

export const viewAllPost=async()=>{
    return await commonRequest("GET",`${BASEURL}/get`,'','')
}

export const userReg=async(body)=>{
    return await commonRequest("POST",`${BASEURL}/reg`,body,'')
}

export const userLogin=async(body)=>{
    return await commonRequest("POST",`${BASEURL}/login`,body,'')
}