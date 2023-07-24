import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import useAxios from './useAxios';

const useComments = (doc) => {
    const {url } = useContext(AuthContext);


    // const {data: comments = [], isLoading, refetch} = useQuery({
    //     queryKey: ['comments',doc],
    //     queryFn: async() => {
    //         const res = await axios.post(`${url}/comment/ids`,doc)
    //         return res.data
    //     }
    // })
    const {data:comments=[], refetch} = useAxios('get','comment/ids',doc)
    return{comments,refetch}
};

export default useComments;