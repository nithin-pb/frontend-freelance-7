import { useEffect } from 'react'
import { Buffer } from 'buffer'

import { useAuthorization } from '.'
import axios, { axiosPrivate } from "../service/axios"

export default function useAxios() {
    const { authorization } = useAuthorization()
    //const refresh = useTokenRefresh()

    useEffect(() => {
        // const { accessToken } = { ...authorization }
        // let isRefreshing = false
        // let failedQueue: any = []

        // function processRequestInQueue(error: any) {
        //     failedQueue.forEach((originalRequest: any) => {
        //         if (error) originalRequest.reject(error)
        //         else originalRequest.resolve()
        //     })
        //     failedQueue = [];
        // }
        // const requestIntercept = axiosPrivate.interceptors.request.use(function (config: any) {
        //     if (!config.headers['Authorization']) {
        //         config.headers.Authorization = `Bearer ${accessToken}`
        //     }
        //     config.headers.Signature = Buffer.from(moment.utc().format()).toString('base64')
        //     return config;
        // });

        // const responseIntercept = axiosPrivate.interceptors.response.use((response) => {
        //     return response
        // }, async function (error) {
        //     const originalRequest = error.config;
        //     const errorCode = apiResponseError(error)?.statusCode || null
        //     if (errorCode === 403 && !originalRequest._retry) {
        //         if (isRefreshing) {
        //             return new Promise(function (resolve, reject) {
        //                 failedQueue.push({ resolve, reject })
        //             }).then(token => {
        //                 originalRequest.headers['Authorization'] = 'Bearer ' + authorization?.accessToken;
        //                 return axiosPrivate(originalRequest);
        //             }).catch(err => {
        //                 return Promise.reject(err);
        //             })
        //         }

        //         originalRequest._retry = true;
        //         isRefreshing = true

        //         return new Promise(async (resolve, reject) => {
        //             try {
        //                 const refreshToken = await refresh();
        //                 processRequestInQueue(null)
        //                 originalRequest.headers['Authorization'] = `Bearer ${refreshToken}`;
        //                 resolve(axiosPrivate(originalRequest));
        //             } catch (e) {
        //                 processRequestInQueue(e)
        //                 reject(e)
        //             } finally {
        //                 isRefreshing = false
        //             }
        //         })
        //     }
        //     return Promise.reject(error);
        // });


        // return () => {
        //     axiosPrivate.interceptors.request.eject(requestIntercept);
        //     axiosPrivate.interceptors.response.eject(responseIntercept);
        // }
    }, [authorization])


    return { axios, axiosPrivate }
}