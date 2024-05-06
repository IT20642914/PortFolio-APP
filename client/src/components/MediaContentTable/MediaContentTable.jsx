/* eslint-disable jsx-a11y/iframe-has-title */

import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Styles from "./MediaContentTable.module.scss";
import { MediaService } from "../../Services/Media.Service";

const MediaContentTable = ({ media, handleRequest, generateReport }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaContent, setMediaContent] = useState({});
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMedia = media.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  useEffect(() => {
    const fetchMediaContent = async () => {
      const updatedMediaContent = {};
      const promises = media.map(async (item) => {
        if (item.type === 'Image') {
          try {
            const response = await MediaService.getImagePath(item.content);
            // Convert binary data to base64 string
            const base64String = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
              )
            );
            updatedMediaContent[item._id] = `data:image/jpeg;base64,${base64String}`;
          } catch (error) {
            console.error("Error fetching media content:", error);
            updatedMediaContent[item._id] = null;
          }
        }
      });

      await Promise.all(promises);
      setMediaContent(updatedMediaContent);
    };

    fetchMediaContent();
  }, [media]);
  const renderMediaContent = async (item) => {
    try {
      const response = await MediaService.getImagePath(item.content);
      const content = response.data; // Assuming the image path is available in response.data

      switch (item.type) {
        case "Image":
          return <img src={content} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />;
        case "Video":
          return <iframe src={content} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100px', height: '100px' }}></iframe>;
        default:
          return null;
      }
    } catch (error) {
      console.error("Error fetching media content:", error);
      return null;
    }
  };

  return (
    <div className={Styles.tableContainer}>
      <div className="container mx-auto px-4 py-4 overflow-x-auto">
        <input
          type="text"
          className="border border-gray-400 px-3 py-2 rounded-md w-full mb-4 mr-2"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="flex justify-end mb-4">
          <button
            className="bg-[#418ca3] hover:bg-5399ac text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleRequest("CREATE", null)}
          >
            Add New Media
          </button>
          <button
            className="bg-[#418ca3] hover:bg-5399ac text-white font-bold py-2 px-4 rounded"
            onClick={generateReport}
          >
            Generate Report
          </button>
        </div>
      </div>

      <div className="container mx-auto overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2">NO</th>
              <th className="py-2">Title</th>
              <th className="py-2">Type</th>
              <th className="py-2">Category</th>
              <th className="py-2">Content</th>
              <th className="py-2">Likes</th>
              <th className="py-2">Dislikes</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedia.map( (item, index) => (
              <tr
                key={item._id}
                className="bg-gradient-to-r from-blue-200 to-white shadow-md mb-2"
              >
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.title}</td>
                <td className="py-2">{item.type}</td>
                <td className="py-2">{item.category}</td> 
                <td className="py-2">
                  {item.type === "Image" && mediaContent[item._id] && (
                    <img
                      src={mediaContent[item._id]}
                      alt={item.title}
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                  {item.type === "Video" && (
                    <iframe
                      src={item.content} // Assuming video content is a URL
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100px', height: '100px' }}
                    ></iframe>
                  )}
                </td>
                <td className="py-2">{item.likes}</td>
                <td className="py-2">{item.dislikes}</td>
                <td className="py-2 flex justify-center">
                  <button
                    className="mr-2 bg-customGray3 hover:bg-blue-300 text-customGray4 font-bold py-2 px-4 rounded"
                    onClick={() => handleRequest("EDIT", item._id)}
                  >
                    <FaEdit className="inline-block mr-1" /> Update
                  </button>
                  <button
                    className="bg-red-200 hover:bg-red-300 text-red-800 font-bold py-2 px-4 rounded"
                    onClick={() => handleRequest("DELETE", item._id)}
                  >
                    <FaTrash className="inline-block mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MediaContentTable;
