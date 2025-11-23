import {v2 as cloudinary} from 'cloudinary';

// function for add product

const addProduct = async (req, res) => {

    try {

        const { name, description, price, category, subCategory, size, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        //all images in an array

        const images = [image1, image2, image3, image4].filter(item => item !== undefined);
        
        // cloudinary upload for multiple images
        
         let imagesUrl = await Promise.all(
            images.map
            (async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url;
            })
        );

        console.log(name, description, price, category, subCategory, size, bestSeller);
        console.log(imagesUrl);

        res.json({ });
    } catch (error) {
        console.log(error);
        res.json({ error: 'Internal server error' });
    }

}

// function for list product

const listProduct = (req, res) => {

}

// function for remove product

const removeProduct = (req, res) => {

}


// function for single product info

const singleProduct = (req, res) => {

}

export default { addProduct, listProduct, removeProduct, singleProduct };