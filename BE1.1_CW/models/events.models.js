const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {type:String, required:true},
    type: { type: String, enum: ["Online", "Offline"], required: true },
    /*type: String,*/
    date: String,
    time: String,
    price: {type: Number},
    image: String,
    tags: [{type:String, required:true, enum:['tech', 'marketing', 'digital', 'design']}],
    description: String,
    venue: String,
    speakers: [
        {
            name: { type: String, required: true },
            role: { type: String, required: true }
        }
    ],
    dressCode: String,
    ageRestriction: String
  },
  {
    timestamps: true
})

const Event = mongoose.model("Event",eventSchema);

module.exports = Event;