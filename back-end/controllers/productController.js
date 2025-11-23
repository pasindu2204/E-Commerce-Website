import {v2 as cloudinary} from 'cloudinary';
import ProductModel from '../models/productModels.js';


// function for add product

const addProduct = async (req, res) => {

    try {

        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

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

        // save data MDB

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestSeller: bestSeller === 'true' ? true : false,
            sizes: JSON.parse(sizes),
            images: imagesUrl,
            date: Date.now()
        };
        console.log(productData);

        const product = new ProductModel(productData);
        await product.save();

        res.json({ success: true, message: 'Product added successfully' });

    } catch (error) {
        console.log(error);
        res.json({ error: 'Internal server error' });
    }

}

// function for list product

const listProduct =  async (req, res) => {

    try {
        const products = await ProductModel.find({});
        res.json({ success: true, products });

    } catch (error) {
        
          console.log(error);
        res.json({ error: 'Internal server error' });
    }

}

// function for remove product

const removeProduct = async (req, res) => {

    try {
         
        await ProductModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Product removed successfully' });
        
    } catch (error) {
        console.log(error);
        res.json({ error: 'Internal server error' });
    }

}


// function for single product info

const singleProduct = (req, res) => {

}

export default { addProduct, listProduct, removeProduct, singleProduct };