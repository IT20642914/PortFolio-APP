const router = require("express").Router();
const Media = require("../models/media");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); 
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    }
});

const upload = multer({ storage });

router.post("/add", upload.single('content'), (req, res) => {
    const { title, description, type, category } = req.body;
    const content = req.file.path; 

    const newMedia = new Media({
        title,
        description,
        type,
        category,
        content
    });

    newMedia.save()
        .then(() => {
            res.json("Media added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Failed to add media' });
        });
});

router.get("/", (req, res) => {
    Media.find()
        .then((medias) => {
            res.json(medias);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Failed to fetch media' });
        });
});

router.get("/search", async (req, res) => {
    try {
        const searchQuery = req.query.title; 
        const medias = await Media.find({ title: { $regex: searchQuery, $options: 'i' } });
        res.status(200).json(medias);
    } catch (err) {
        console.error('Error searching media:', err);
        res.status(500).json({ error: 'Error searching media' });
    }
});

router.post("/like/:id", async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        media.likes++;
        await media.save();
        res.status(200).json({ likes: media.likes });
    } catch (err) {
        console.error('Error liking media:', err);
        res.status(500).json({ error: 'Error liking media' });
    }
});

router.post("/dislike/:id", async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        media.dislikes++;
        await media.save();
        res.status(200).json({ dislikes: media.dislikes });
    } catch (err) {
        console.error('Error disliking media:', err);
        res.status(500).json({ error: 'Error disliking media' });
    }
});

router.put("/update/:id", upload.single('content'), async (req, res) => {
    const mediaId = req.params.id;
    const { title, description, type, category } = req.body;

    try {
        const updatedMedia = await Media.findByIdAndUpdate(mediaId, {
            title,
            description,
            type,
            category,
            content: req.file ? req.file.path : undefined 
        }, { new: true }); 

        if (!updatedMedia) {
            return res.status(404).json({ status: "Media not found" });
        }

        res.status(200).json({ status: "Media updated", media: updatedMedia });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "Can't update data", error: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedMedia = await Media.findByIdAndDelete(req.params.id);
        if (!deletedMedia) {
            return res.status(404).json({ status: "Media not found" });
        }
        res.status(200).json({ status: "Media deleted" });
    } catch (err) {
        console.error('Error deleting media:', err);
        res.status(500).json({ error: 'Error deleting media' });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ status: "Media not found" });
        }
        res.status(200).json({ status: "Media fetched", media });
    } catch (err) {
        console.error('Error fetching media:', err);
        res.status(500).json({ error: 'Error fetching media' });
    }
});

module.exports = router;
