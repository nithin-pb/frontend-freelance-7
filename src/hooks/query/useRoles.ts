import { useMutation, useQuery } from "@tanstack/react-query";

import { apiEndPoint } from "../../service/api-endpoint"
import { useAxios } from "../"
//import { apiResponseError } from "../../helper";


const useRoles = () => {
    const { axiosPrivate } = useAxios();

    const useListRoles = () => useQuery(['roleList'],
        (params: any) => axiosPrivate.get(apiEndPoint.profile.list, params)
            .then((e: any) => roles))

    const useListRoleById = () => useMutation(
        (id: any) => axiosPrivate.get(`https://jsonplaceholder.typicode.com/todos/1`)
            .then((e: any) => ({ name: 'Test', description: 'test', permissions: permissionsAPI })))
    return {
        useListRoles,
        useListRoleById
    }
}

export default useRoles

const roles = [
    {
        Id: 1,
        Name: "Administrator",
        Description: "This is a test API",
        NumberOfUsers: 12,
    },
    {
        Id: 2,
        Name: "Supervisor",
        Description: "This is a test API",
        NumberOfUsers: 12,
    },
    {
        Id: 2,
        Name: "Read User",
        Description: "This is a test API",
        NumberOfUsers: 12,
    }
]

const permissionsAPI = [
    "ListProfiles",
    "CreateProfiles",
    "UpdateProfiles",
    "DeleteProfiles",
    "ModifyProfileTemplate",
    "DownloadProfiles",
    "ListUser",
    "CreateUser",
    "UpdateUser",
    "DeleteUser",
    "ChangePassword", // only applicable for other user password change
    "RoleAssignment",
    "ListRole",
    "CreateRole",
    "UpdateRole",
    "DeleteRole",
    "ViewReports",
    "DownloadReports"
]