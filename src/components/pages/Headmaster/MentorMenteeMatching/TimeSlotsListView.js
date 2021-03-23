import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../../../state/actions/index';
import { Row, Col } from 'antd';
import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'space-around',
  display: 'flex',
};

const TimeSlotsListView = props => {
  const { fetchTimeSlots } = props;

  useEffect(() => {
    fetchTimeSlots();
  }, [fetchTimeSlots]);

  return (
    <div className="container">
      <h2>Time Slots</h2>
      <div>
        {props.timeSlots.map(timeSlot => (
          <Card title={timeSlot.day}>
            <Card.Grid hoverable={false} style={gridStyle}>
              {timeSlot.time}
            </Card.Grid>
            <Card.Grid hoverable={false} style={gridStyle}>
              {timeSlot.assigned}
            </Card.Grid>
          </Card>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.headmasterReducer.isLoading,
    timeSlots: state.headmasterReducer.timeSlots,
  };
};

export default connect(mapStateToProps, { fetchTimeSlots })(TimeSlotsListView);
