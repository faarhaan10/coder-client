import Blog from './Blog/Blog';  



const Blogs = ({blogs,blogRefetch}) => { 
      
    return (
        <>

            {
                blogs?.map(blog => <Blog key={blog._id} blog={blog} blogRefetch={ blogRefetch} />)
            }


        </>
    );
};

export default Blogs;