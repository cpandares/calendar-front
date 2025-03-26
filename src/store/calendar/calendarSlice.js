import { createSlice } from '@reduxjs/toolkit';

import { addHours } from 'date-fns';


const tempEvent =  {
    _id: new Date().getTime(),
    title: 'Estudiar',
    notes: 'Come',
    start: new Date(),
    end: addHours(new Date(), 2),
    user:{
      name:'Cesar',
      id: 'abc123'
    }
  }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvents:null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvents = payload;
        }
    }
});

export const { onSetActiveEvent } = calendarSlice.actions;