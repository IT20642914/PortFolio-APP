import React, { useState, useEffect } from 'react';
import Styles from './UserMediaContent.module.scss';
import MediaCard from '../../components/MediaCard/MediaCard';
import { MediaService } from '../../Services/Media.Service';
import { toast } from 'react-toastify';
import { Grade } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { G } from '@react-pdf/renderer';

const UserMediaContent = () => {
    const [medias, setMedias] = useState([]);
    const [typeFilter, setTypeFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        initialData();
    }, []);

    const initialData = async () => {
        try {
            const res = await MediaService.getAllMedia();
            setMedias(res.data);
        } catch (error) {
            console.error('Error fetching media:', error);
            toast.error('Failed to fetch media');
        }
    };

    const handleLike = (id) => {
        console.log('Like', id);
        // Add your like API interaction here
    };

    const handleDislike = (id) => {
        console.log('Dislike', id);
        // Add your dislike API interaction here
    };

    const handleTypeFilterChange = (event) => {
        setTypeFilter(event.target.value);
    };

    const handleCategoryFilterChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    const filteredMedias = medias.filter(media => {
        return (typeFilter === 'All' || media.type === typeFilter) &&
               (categoryFilter === 'All' || media.category === categoryFilter);
    });

    return (
        <div className={Styles.container}>
            <Grid container spacing={2} sx={{justifyContent:"center",display:"flex"}}>
     
            <Grid item xs={4}>
                <select value={typeFilter} onChange={handleTypeFilterChange}>
                    <option value="All">All Types</option>
                    <option value="Image">Image</option>
                    <option value="Video">Video</option>
                </select>
                </Grid>
                <Grid item xs={4}>
                <select value={categoryFilter} onChange={handleCategoryFilterChange}>
                    <option value="All">All Categories</option>
                    <option value="Photography">Photography</option>
                    <option value="YouTube">YouTube</option>
                    {/* Add more categories as needed */}
                </select>
                </Grid>
                <Grid item xs={12} sx={{display:"flex", justifyContent:"space-evenly"}}>
            {filteredMedias.map(media => (
                <MediaCard key={media._id} media={media} handleLike={handleLike} handleDislike={handleDislike} />
            ))}
               </Grid>
            </Grid>    
        </div>
    );
};

export default UserMediaContent;
