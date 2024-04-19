"use client"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import {DateRange} from 'react-date-range';
import { useState } from 'react';

export function BookingCalendar() {
    const [state, setState] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection", 
    }])
  return (
      <DateRange
          date={new Date()}
          showDateDisplay={false}
          rangeColors={["#00c04b"]}
          ranges={state}
          onChange={(item) => setState([item.selection] as any)}
          minDate={new Date()}
          direction="vertical"
      /> 
  )
}
