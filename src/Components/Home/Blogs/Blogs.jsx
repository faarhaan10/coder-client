import Blog from './Blog/Blog';  



const Blogs = ({blogs,loading}) => { 
    console.log(blogs);
     
    return (
        <>

            {
                blogs?.map(blog => <Blog blog={blog} />)
            }


        </>
    );
};

export default Blogs;