import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentorSlots } from '../../../../state/actions/index';

const MentorSlotView = props => {
  const { fetchMentorSlots } = props;

  useEffect(() => {
    fetchMentorSlots();
  }, [fetchMentorSlots]);

  return (
    <div className="mentorAvail">
      <h2>Mentor Availability</h2>
      <div></div>
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
