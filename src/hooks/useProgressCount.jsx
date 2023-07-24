import { useContext } from "react";
import { AuthContext } from '../context/AuthProvider'
import useAxios from './useAxios'

const useProgressCount = () => {
    // const { user } = useContext(AuthContext)
    // const { data, loading, error, refetch } = useAxios('get', `post/progress?userId=${user.batch ? user._id : undefined}`);
    
    // return { data, loading, error , refetchProgress: refetch }
};

export default useProgressCount;