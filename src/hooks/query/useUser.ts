import { useMutation, useQuery } from "@tanstack/react-query";

import { apiEndPoint } from "../../service/api-endpoint"
import { useAxios } from "../"
//import { apiResponseError } from "../../helper";


const useUser = () => {
    const { axiosPrivate } = useAxios();

    const useListUser = () => useQuery(['userList'],
        (params: any) => axiosPrivate.get(apiEndPoint.user.list, params)
            .then((e: any) => listUser))

    const useListUserById = () => useMutation(
        (id: any) => axiosPrivate.get(`${apiEndPoint.user.listById}/${id}`)
            .then((e: any) => listUserByIdDummy))

    const useCreateUser = () => useMutation(
        (params: any) => axiosPrivate.post(apiEndPoint.user.create, params)
            .then((e: any) => "user created"))

    const useUpdateUser = () => useMutation(
        (params: any) => axiosPrivate.put(apiEndPoint.user.update, params)
            .then((e: any) => "user updated"))

    const useDeleteUser = () => useMutation(
        (params: any) => axiosPrivate.delete(`${apiEndPoint.user.list}/${params.id}`)
            .then((e: any) => "user deleted"))

    const useUserPasswordReset = () => useMutation(
        (params: any) => axiosPrivate.put(apiEndPoint.user.passwordReset, params)
            .then((e: any) => "password updated"))

    return {
        useListUser,
        useListUserById,
        useUpdateUser,
        useDeleteUser,
        useCreateUser,
        useUserPasswordReset
    }
}

export default useUser


const listUserByIdDummy = {
    FirstName: 'Jane',
    LastName: 'Doe',
    Age: '20',
    Email: 'jane.doe@test.com',
    Role: "Administrator",
    Gender: 'Male'
}

const listUser = [
    {
        FirstName: 'Jane',
        LastName: 'Doe',
        Age: '20',
        Email: 'jane.doe@test.com',
        Role: "Administrator",
        Gender: 'Male'
    },
    {
        FirstName: 'Jane',
        LastName: 'Doe2',
        Age: '20',
        Email: 'jane.doe2@test.com',
        Role: "Supervisor",
        Gender: 'Female'
    }
]