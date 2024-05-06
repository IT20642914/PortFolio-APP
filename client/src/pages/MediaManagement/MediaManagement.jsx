import React, { useState, useEffect } from 'react';
import MediaContentTable from '../../components/MediaContentTable/MediaContentTable';
import { MediaService } from '../../Services/Media.Service'; // Assuming you have a service for handling media data
// import MediaProfileModal from '../../components/MediaProfileModal/MediaProfileModal'; // If you need a modal to edit/add media
import { toast } from 'react-toastify';
const MediaManagement = () => {
    const [media, setMedia] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetchMedia();
      }, []);
      const fetchMedia = () => {
        MediaService.getAllMedia() // Assume this service function retrieves all media
          .then(response => {
            if (response.status === 200) {
              setMedia(response.data);
            } else {
              toast.error("Failed to fetch media");
            }
          })
          .catch(error => {
            toast.error("Error fetching media: " + error.message);
          });
      };

      const handleRequest = (action, mediaId) => {
        // Handle create, edit, delete actions
        console.log("Action:", action, "Media ID:", mediaId);
        // Open modal or perform other actions based on 'action'
      };
    
  return (
    <div className="ml-64 mt-8 px-4">
               <h1 className="text-2xl font-bold mb-4">Media Management</h1>
    <MediaContentTable media={media} handleRequest={handleRequest} />
    {/* {openModal && (
      <MediaProfileModal 
        open={openModal} 
        onClose={() => setOpenModal(false)}
        // Add other props as needed
      />
    )} */}
  </div>
  )
}

export default MediaManagement