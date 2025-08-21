import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type:String,
            require:[true,"Video file is required"]
        },
        thumbnail:{
            type:String,
            require:[true,"Thumbnail is required"]
        },
        title:{
            type:String,
            require:[true,"Title is required"],
            trim:true
        },
        description:{
            type:String,
            require:[true,"Description is required"],
            trim:true
        },
        duration:{
            type:Number,
            require:[true,"Duration is required"]
        },
        views:{
            type:Number,
            default:0
        
        },
        isPublished:{
            type:Boolean,
            default:true
        }

    }
)

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema);