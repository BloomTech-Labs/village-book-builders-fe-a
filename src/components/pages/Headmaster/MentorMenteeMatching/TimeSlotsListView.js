import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../../../state/actions/index';
import { Row, Col } from 'antd';

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
          <div>
            <h3>{timeSlot.day}</h3>
            <Row>
              <Col xs={24} xl={8}>
                {timeSlot.time}
              </Col>
              <Col xs={24} xl={8}>
                {timeSlot.assigned}
              </Col>
            </Row>
          </div>
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
