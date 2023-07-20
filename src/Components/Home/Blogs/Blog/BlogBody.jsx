import { Box, Chip, Typography } from '@mui/material';
const BlogBody = ({blog}) => {
    return (
        <>
            <Box sx={{ mt: 2 }}>
                <Box>
                    <Typography variant="body2" >
                        Category: {blog?.category}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Tags: {
                            blog?.tags.map(item => <Chip key={item} label={item} size="small" sx={{ mr: .1 }} />)
                        }
                    </Typography>



                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    {blog.postBody}
                </Typography>
            {blog?.postImage &&<Box sx={{ height: '350px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={blog.postImage} alt="Blogger Name" style={{ height: '100%', width: 'auto', objectFit: 'cover', }} />

            </Box>}
            </Box >
        </>
    );
};

export default BlogBody;