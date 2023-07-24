import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const useProgress = () => {
    const { user,url } = useContext(AuthContext);


    const {data: progress = {}, isLoading, refetch} = useQuery({
        queryKey: ['progress',user.email],
        queryFn: async() => {
            const res = await fetch(`${url}/post/progress?userId=${user.batch ? user._id : undefined}`);
            return res.json();
        }
    })
    return{progress,progressLoading:isLoading,progressRefetch:refetch}
};

export default useProgress;