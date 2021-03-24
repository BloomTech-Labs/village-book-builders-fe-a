import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTimeSlots } from '../../../../state/actions/index';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import styled from 'styled-components';

const xlCardStyle = {
  width: 400,
  textAlign: 'center',
};

const gridStyle = {
  width: '30%',
  textAlign: 'center',
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
        <Row gutter={25}>
          {props.timeSlots.map(timeSlot => (
            <Card style={xlCardStyle}>
              March {timeSlot.day}
              <Col className="gutter-row" span={25}>
                <Card
                  type="inner"
                  title="Time"
                  style={gridStyle}
                  border={false}
                >
                  {timeSlot.time}
                </Card>
              </Col>
              <Col className="gutter-row" span={25}>
                <Card type="inner" title="booked" style={gridStyle}>
                  {timeSlot.assigned}
                </Card>
              </Col>
            </Card>
          ))}
        </Row>
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
