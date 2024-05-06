import React, { useState, useEffect } from 'react';
import MediaContentTable from '../../components/MediaContentTable/MediaContentTable';
import { MediaService } from '../../Services/Media.Service';
import { toast } from 'react-toastify';
import MediaModal from '../../components/MediaModal/MediaModal';
import { SCREEN_MODES } from '../../utilities/app.constants'; // Assuming SCREEN_MODES is used similarly here
import upload from '../../utilities/upload';
import { validateFormData } from '../../helper/FormValidators';
const MediaManagement =  () => {
    const INITIAL_MEDIA_FORM = {
        _id: { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "" },
        title: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "" },
        description: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "" },
        type: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "" },
        category: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "" },
        content: { value: "", isRequired: true, disable: false, readonly: false, validator: "null", error: "" },
    };

    const [media, setMedia] = useState([]);
    const [mediaForm, setMediaForm] = useState(INITIAL_MEDIA_FORM);
    const [openModal, setOpenModal] = useState(false);
    const [helperText, setHelperText] = useState(true);
    const [mode, setMode] = useState(null);

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = () => {
        MediaService.getAllMedia()
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
        console.log("Action:", action, "Media ID:", mediaId);
        setMode(action);
        if (action === SCREEN_MODES.CREATE) {
            setMediaForm(INITIAL_MEDIA_FORM);
            setOpenModal(true);
        } else if (action === SCREEN_MODES.EDIT && mediaId) {
            MediaService.getMediaById(mediaId)
                .then(response => {
                    if (response.status === 200) {
                        setMediaForm({
                            ...response.data,
                            _id: { value: response.data._id, isRequired: false, disable: false, readonly: true, validator: "text", error: "" },
                        });
                        setOpenModal(true);
                    }
                })
                .catch(error => {
                    toast.error("Error fetching media details: " + error.message);
                });
        }
    };

    const handleCloseModal = () => {
        setMediaForm(INITIAL_MEDIA_FORM);
        setOpenModal(false);
    };

    const handleInputFocus = (property) => {
        setMediaForm({
            ...mediaForm,
            [property]: {
                ...mediaForm[property],
                error: null,
            },
        });
    };

    const onInputHandleChange = (property, value) => {
        console.log("first", property, value)
        setMediaForm({
            ...mediaForm,
            [property]: {
                ...mediaForm[property],
                value: value,
            },
        });
    };

    const HandleBtnResponse = async(mode) => {
        if (mode === SCREEN_MODES.CREATE) {
            const [validateData, isValid] = await validateFormData(mediaForm);
            setMediaForm(validateData);
           
            console.log("validate",isValid,validateData)
        }       
        
    };


    return (
        <div className="ml-64 mt-8 px-4">
            <h1 className="text-2xl font-bold mb-4">Media Management</h1>
            <MediaContentTable media={media} handleRequest={handleRequest} />
            <MediaModal
                open={openModal}
                handleClose={handleCloseModal}
                mediaForm={mediaForm}
                helperText={helperText}
                onInputHandleChange={onInputHandleChange}
                handleInputFocus={handleInputFocus}
                HandleBtnResponse={HandleBtnResponse}
                mode={mode}
            />
        </div>
    );
};

export default MediaManagement;
