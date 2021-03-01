import React from 'react';

const TimeSlotsListView = props => {
  return (
    <div className="container">
      <h3>Sunday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>4:00 pm</li>
      </ol>

      <h3>Monday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>4:00 pm</li>
      </ol>

      <h3>Tuesday</h3>
      <ol>
        <li>2:00 pm</li>
        <li>3:00 pm</li>
      </ol>

      <h3>Wendsday</h3>
      <ol>
        <li>2:00 pm</li>
        <li>3:00 pm</li>
      </ol>

      <h3>Thursday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>5:00 pm</li>
      </ol>

      <h3>Friday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>5:00 pm</li>
      </ol>

      <h3>Saturday</h3>
      <ol>
        <li>1:00 pm</li>
        <li>2:00 pm</li>
      </ol>
    </div>
  );
};

export default TimeSlotsListView;
