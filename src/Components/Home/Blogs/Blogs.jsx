import Blog from './Blog/Blog';  



const Blogs = ({blogs}) => { 
      
    return (
        <>

            {
                blogs?.map(blog => <Blog key={blog._id} blog={blog}  />)
            }


        </>
    );
};

export default Blogs;