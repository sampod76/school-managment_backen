import { Schema, model } from 'mongoose';
import { STATUS } from '../../interface/enumType';
import { IEvents } from './event.interface';
const EventSchema = new Schema<IEvents>(
  {
    event_name: {
      type: String,
      required: true,
    },
    event_details: {
      type: String,
      required: true,
    },
    event_date: {
      type: String,
   
      required: true,
    },
    status: {
      type: String,
      enum:STATUS,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export const EventModel = model<IEvents>('events', EventSchema);