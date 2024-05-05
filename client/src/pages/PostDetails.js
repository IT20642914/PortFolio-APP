import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import cover from '../images/aa.png';
import NavBar from '../components/NavBar';
import Footer from './User_UI/U_Pages/footer';
import { FaEdit } from 'react-icons/fa'; // Importing edit icon
import '../pages/User_UI/Styles/userdetails.css';

function PostDetails() {
  const { id } = useParams(); // Access route parameter 'id' using useParams hook
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setLoading(false);
      }
    });
  }, [id]);

  const handleImageClick = (image) => {
    setEnlargedImage((prevImage) => (prevImage ? null : image));
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div id="about">
            <div className="hero-section" style={{ position: 'relative' }}>
              <div className="cover-image" style={{ position: 'relative' }}>
                <img src={cover} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', justifyContent: 'center', alignItems: 'center' }} />
                <div className="text-overlay" style={{ position: 'absolute', top: '-20px', left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center' }}>
                  <div>
                    <h1>Hi, I {' '}{post.portfolio_name}</h1>
                  </div>
                  <div>
                    <h3>
                      I am a <h1>{post.category}</h1>
                    </h3>
                  </div>
                  <h5>Email : {post.email} | contact No : {post.contact_no}</h5>
                </div>
              </div>
              <div className="profile-details" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
                <div className="profile-image">
                  <img src={post.image?.image} alt='Profile' style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
              </div>
             
              <div
              className="edit-button"
              style={{
                position: 'absolute',
                top: '350px',
                right: '20px',
                cursor: 'pointer',
                color: '#fff',
                zIndex: 999
              }}
              onClick={() => {
                window.location.href = `/editpost/${post._id}`;
              }}
            >
              Edit | <FaEdit size={24} /> {/* Edit button with edit icon */}
            </div>
        
            </div>
          </div>

          <div className='bioDescription'>
            <h5>Bio</h5>
            <p>{post.bio}</p>
            <h5>Description</h5>
            <p>{post.description}</p>
          </div>
          <div className="imageContainer">
            <div className="gallery">
              {post.gallery &&
                post.gallery.map((item, index) => (
                  <div
                    key={item._id}
                    className="imageItem"
                    onClick={() => handleImageClick(item)}
                    style={{ filter: enlargedImage ? (item._id === enlargedImage._id ? 'none' : 'blur(8px)') : 'none' }}
                  >
                    <img src={item.image} alt={item.title} className="uploadedImage" />
                    <div className="imageDetails">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {enlargedImage && (
            <div className="enlargedImageModal" onClick={handleCloseEnlarged} style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: '999' }}>
              <img src={enlargedImage.image} alt={enlargedImage.title} className="enlargedImage" style={{ maxWidth: '80%', maxHeight: '80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '8px' }} />
            </div>
          )}
          <NavBar />
          <Footer />
        </>
      )}
    </div>
  );
}

export default PostDetails;
