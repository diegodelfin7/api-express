const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

//const PostSchema = new mongoose.Schema({

const PostSchema = new Schema({
	author : ObjectId,
	title : String,
	contents : Array,
	image : String,
	releaseDate : Date,
	special : boolean
})

module.exports = mongoose.model('PostSchema', PostSchema)