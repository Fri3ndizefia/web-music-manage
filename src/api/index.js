import {get, post} from './http'

// Verify login in
export const getLoginStatus = (params) => post(`/admin/login/status`, params)
