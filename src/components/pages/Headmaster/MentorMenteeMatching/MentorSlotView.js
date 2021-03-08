import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentorSlots } from '../../../../state/actions/index';
import { Divider, List } from 'antd';

const MentorSlotView = props => {
  const { fetchMentorSlots } = props;

  useEffect(() => {
    fetchMentorSlots();
  }, [fetchMentorSlots]);

  return (
    <div>
      <h1>Mentor Time Slots</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.headmasterReducer.isLoading,
    slot: state.headmasterReducer.slot,
  };
};

export default connect(mapStateToProps, { fetchMentorSlots })(MentorSlotView);
