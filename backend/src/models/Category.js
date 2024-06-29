import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
    {
        categoryName:{type:String, required:true, unique:true},
        categoryDescription:{type:String}    
    }
)

const Category = mongoose.model('Category', CategorySchema )
export default Category

