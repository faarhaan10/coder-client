import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';

const useBlogs = (query, filter) => {
    const { user, url } = useContext(AuthContext);
    const batch = (!user.isAdmin && user.email) ? user.batch : ''
    const route = `batch=${batch}&${query}${filter ? '&' + filter : ''}`

    const { data: blogs = [], isLoading, refetch } = useQuery({
        queryKey: ['post', user.email, route],
        queryFn: async () => {
            const res = await axios.get(`${url}/post?${route}`);
            return res.data;
        }
    })

    return { blogs, blogsLoading: isLoading, blogsRefetch: refetch }

};

export default useBlogs;