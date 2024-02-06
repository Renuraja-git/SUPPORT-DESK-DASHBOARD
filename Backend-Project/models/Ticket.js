const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
   ticket_id :  {
      type: String,
      required: true
    },
   department :  {
      type: String,
      required: true
    },
   priority :  {
      type: String,
      required: true
    },
   description :  {
      type: String,
      required: true
    },
   reportedby :  {
      type: String,
     
    },
   ticketstatus :  {
      type: Object,
      properties : {
          status: {
         type: "string",
         enum: ["Draft","Assigned", "in_progress", "resolved", "closed", "on_hold", "cancelled"]
       }
      },
     
      required:true
    },
},
{
   timestamps: true
}
);

const TicketModel = mongoose.model("tickets",TicketSchema)
module.exports = TicketModel