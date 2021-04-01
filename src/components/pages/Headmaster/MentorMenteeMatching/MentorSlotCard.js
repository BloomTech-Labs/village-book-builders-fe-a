import React from 'react';
import { Avatar, Divider } from 'antd';
import styled from 'styled-components';

const SlotDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MentorSLot = props => {
  return (
    <div>
      <Divider>
        <div>
          <Avatar src={props.item.mentor_picture} />
          <header>{props.item.first_name + ' ' + props.item.last_name}</header>
          <header>Time Zone: {props.item.availability.time_zone}</header>
          <header>
            Availability:{' '}
            {props.item.availability.as_early_as +
              ' - ' +
              props.item.availability.as_late_as}
          </header>
        </div>
      </Divider>
    </div>
  );
};

export default MentorSLot;
