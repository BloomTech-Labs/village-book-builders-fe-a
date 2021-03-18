import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Divider, List, Avatar, Input } from 'antd';
import Moment from 'moment';
import {
  fetchMentors,
  fetchMentorsBySearch,
} from '../../../state/actions/index';

const MentorList = props => {
  const { fetchMentors } = props;
  const [search, setSearch] = useState('');

  console.log(search);
  useEffect(() => {
    fetchMentors();
  }, [fetchMentors]);

  const searchHandler = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="menteeContainer">
      <h1 id="menteeTittle">Mentor List</h1>
      <div className="exploreWrapper">
        <Input.Search
          value={search}
          placeholder="Search by Name"
          style={{ width: '80%', alignSelf: 'center' }}
          onChange={searchHandler}
          onSubmit={fetchMentorsBySearch(search)}
        />
        <Divider />
        <List
          itemLayout="vertical"
          dataSource={props.mentors.filter(mentor =>
            mentor.last_name.includes(search)
          )}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.mentor_picture} />}
                title={item.first_name + ' ' + item.last_name}
              />

              <List.Item.Meta
                title={<header>Email Address</header>}
                description={item.email}
              />
              <List.Item.Meta
                title={<header>Primary Language</header>}
                description={item.primary_language}
              />
              <List.Item.Meta
                title={<header>Time Zone</header>}
                description={item.availability.time_zone}
              />
              <List.Item.Meta
                title={<header>Times available</header>}
                description={
                  'from ' +
                  item.availability.as_early_as +
                  ' to ' +
                  item.availability.as_late_as
                }
              />
              <List.Item.Meta
                title={<header>Contact by</header>}
                description={item.availability.methods.map(method => {
                  return ' ' + method;
                })}
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
    isloading: state.headmasterReducer.isLoading,
    mentors: state.headmasterReducer.mentors,
  };
};

export default connect(mapStateToProps, { fetchMentors })(MentorList);
