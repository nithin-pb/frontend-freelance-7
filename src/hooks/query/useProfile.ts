import { useMutation, useQuery } from "@tanstack/react-query";

import { apiEndPoint } from "../../service/api-endpoint"
import { useAxios } from "../"
//import { apiResponseError } from "../../helper";


const useProfile = () => {
    const { axios, axiosPrivate } = useAxios();

    const useCreateProfile = useMutation(
        (params: any) => axios.post(apiEndPoint.profile.create, params)
            .then((e: any) => e?.data?.results)
    )

    const useCreateProfileUpload = useMutation(
        (params: any) => axios.post(apiEndPoint.profile.upload, params)
            .then((e: any) => e?.data?.results)
    )


    const useCreateSocialMedia = useMutation(
        (params: any) => axiosPrivate.post(apiEndPoint.socialMedia.create, params)
            .then((e: any) => e?.data?.results))

    const useListProfile = () => useQuery(['profileList'],
        (params: any) => axiosPrivate.get(apiEndPoint.profile.list, params)
            .then((e: any) => e?.data?.results))

    const useListProfileByUsername = useMutation(
        (username: any) => axiosPrivate.get(`${apiEndPoint.profile.listByUsername}/${username}`)
            .then((e: any) => e?.data?.results))

    const useUpdateProfile = useMutation(
        (params: any) => axiosPrivate.post(`${apiEndPoint.profile.update}`, params)
            .then((e: any) => e?.data?.results))

    return {
        useCreateProfile,
        useCreateSocialMedia,
        useListProfile,
        useListProfileByUsername,
        useCreateProfileUpload,
        useUpdateProfile
    }
}

export default useProfile