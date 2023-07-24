import * as React from 'react'; 
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography'; 
import {Link} from 'react-router-dom'

export default function Issue({ issue }) { 
 
    return (
        <Card sx={{ display: 'flex',mt:1 }}>
            <CardMedia
                component="img"
                sx={{ width: 100 ,height: 52,objectFit:'cover' }}
                image={issue.postImage?issue.postImage:"https://web.programming-hero.com/thumbnail.png"}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column',p:.5 }}>
                <CardContent sx={{ flex: '1 0 auto', }} style={{padding:0}}>
                    <Typography variant="span">
                        <Link to={`${window.location.href}post/${issue._id}`}>{issue.author}</Link>
                        <span
                        style={{fontSize:7,border:'1px solid #1976d2',borderRadius:10,padding:'1px 1px' ,color:'#1976d2'}}
                        > Batch-{issue.batch}</span>
                    </Typography>
                    
                    <Typography variant="caption" color="text.secondary" component="div" sx={{p:0}}>
                        {issue.postBody.slice(0,35)}...
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}