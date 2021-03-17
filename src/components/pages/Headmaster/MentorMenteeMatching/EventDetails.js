import React from 'react';
import { Divider } from 'antd';
const EventDetails = ({ currentEvent }) => {
  console.log(currentEvent, 'Details');
  let title = `${currentEvent.content} & ${currentEvent.mentee} @ ${currentEvent.slot}`;
  return (
    <div className="menteeProfileWrapper">
      <Divider plain>Title</Divider>
      <p style={{ margin: 'auto' }}>{title}</p>
      <Divider plain>Date</Divider>
      <p style={{ margin: 'auto' }}>{currentEvent.date}</p>
      <Divider plain>Time Slot</Divider>
      <p style={{ margin: 'auto' }}>{currentEvent.slot}</p>
      <Divider plain>Mentee</Divider>
      <p style={{ margin: 'auto' }}>{currentEvent.mentee}</p>
      <Divider plain>Mentor</Divider>
      <p style={{ margin: 'auto' }}>{currentEvent.mentor}</p>
    </div>
  );
};

export default EventDetails;
