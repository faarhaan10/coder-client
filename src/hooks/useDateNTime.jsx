import { useState, useEffect } from 'react';

// const formatDateAndTime = (timeString) => {
//   // The same formatDateAndTime function from the previous response
//   // ...

//   return formattedDate;
// };



const formatDateAndTime = (timeString) => {
    const currentTime = new Date();
    const targetTime = new Date(timeString);

    const diffInMilliseconds = currentTime - targetTime;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    if (diffInSeconds < 60) {
        return 'Just now';
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else {
        const formattedDate = targetTime.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        return  formattedDate;
    }
};

const useDateNTime = (timeString) => { 
    const [timeAgo, setTimeAgo] = useState('');
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const updateTimeAgo = () => {
            const currentTimeAgo = formatDateAndTime(timeString);
            setTimeAgo(currentTimeAgo);
        };

        const updateFormattedDate = () => {
            const targetTime = new Date(timeString)
            const formattedDate = targetTime.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
            setFormattedDate(formattedDate);
        };

        updateTimeAgo();
        updateFormattedDate();

        // Update the time and date every minute
        const interval = setInterval(() => {
            updateTimeAgo();
            updateFormattedDate();
        }, 60000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [timeString]);

    return { timeAgo, formattedDate };
};


export default useDateNTime;
