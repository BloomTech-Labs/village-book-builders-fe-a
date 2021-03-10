import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../../state/actions/index';
import { Divider, List } from 'antd';

const MentorSlotView = props => {
  const { fetchMentors } = props;

  useEffect(() => {
    fetchMentors();
  }, [fetchMentors]);

  return (
    <div>
      <h1>Mentor Time Slots</h1>
      <div>
        <Divider />
        <List></List>
        <Divider />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.headmasterReducer.isLoading,
    mentors: state.headmasterReducer.mentors,
  };
};

export default connect(mapStateToProps, { fetchMentors })(MentorSlotView);
