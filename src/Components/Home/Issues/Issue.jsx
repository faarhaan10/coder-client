import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {Link} from 'react-router-dom'

export default function Issue() {
    const theme = useTheme();
    const demoText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab harum mollitia. Esse, explicabo cupiditate.'

    return (
        <Card sx={{ display: 'flex',mt:1 }}>
            <CardMedia
                component="img"
                sx={{ width: 100 ,height: 52,objectFit:'cover' }}
                image="https://web.programming-hero.com/thumbnail.png"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column',p:.5 }}>
                <CardContent sx={{ flex: '1 0 auto', }} style={{padding:0}}>
                    <Typography variant="span">
                        <Link to='${window.location.href}'>Live From Space</Link>
                        <span
                        style={{fontSize:7,border:'1px solid #1976d2',borderRadius:10,padding:'1px 1px' ,color:'#1976d2'}}
                            > Batch-8</span>
                    </Typography>
                    
                    <Typography variant="caption" color="text.secondary" component="div" sx={{p:0}}>
                        {demoText.slice(0,35)}...
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}