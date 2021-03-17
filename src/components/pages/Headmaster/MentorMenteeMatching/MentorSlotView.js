import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../../state/actions/index';
import { Divider, List, Avatar } from 'antd';

const MentorSlotView = props => {
  const { fetchMentors } = props;

  useEffect(() => {
    fetchMentors();
  }, [fetchMentors]);

  console.log('props.mentors', props.mentors);

  return (
    <div>
      <h1>Mentor Time Slots</h1>
      <div>
        <Divider />
        <List
          itemLayout="vertical"
          dataSource={props.mentors}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.mentor_picture} />}
                title={item.first_name + ' ' + item.last_name}
              />
              <List.Item.Meta
                title={<header>Time Zone:</header>}
                description={item.availability.time_zone}
              />
              <List.Item.Meta
                title={<header>Availability:</header>}
                description={
                  item.availability.as_early_as +
                  ' - ' +
                  item.availability.as_late_as
                }
              />
            </List.Item>
          )}
        />
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
