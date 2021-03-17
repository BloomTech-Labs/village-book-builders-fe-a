import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Space, Button } from 'antd';
import moment from 'moment';
const initialState = {
  date: '',
  type: 'success',
  content: '',
};

const EventForm = ({ currentEvent, setEvents, events, mentees, mentors }) => {
  const { Option } = Select;

  const [calValue, setCalValue] = useState(initialState);

  //standard picker handler
  const handleChange = e => {
    setCalValue({ ...calValue, [e.target.name]: e.target.value });
  };

  const onFinish = value => {
    let cased = moment(calValue.date).format('D');
    let title = `${value.content} & ${value.mentee} @ ${value.slot}`;
    let type = 'success';
    const finished = {
      ...value,
      content: title,
      type: type,
      case: cased,
      date: calValue.date,
      mentor: value.content,
    };
    console.log(value);
    setEvents([...events, finished]);
  };
  const setMenteeValues = mentee => {
    let value = mentee.first_name + ' ' + mentee.last_name;

    return (
      <Option value={value} key={mentee.id}>
        {value}
      </Option>
    );
  };

  function handleDate(date, dateString) {
    console.log(date, dateString);
    setCalValue({ ...calValue, date: dateString });
  }
  const setMentorValues = mentor => {
    let value = mentor.first_name + ' ' + mentor.last_name;
    return (
      <Option value={value} key={mentor.id}>
        {value}
      </Option>
    );
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Form.Item label="Mentor">
          <Input.Group>
            <Form.Item
              name="content"
              noStyle
              rules={[{ required: true, message: 'Mentor is required' }]}
              onChange={e => handleChange(e)}
            >
              <Select
                placeholder="Please select a Mentor"
                name={calValue.content}
              >
                {mentors.map(mentor => {
                  return setMentorValues(mentor);
                })}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="Mentee">
          <Input.Group>
            <Form.Item
              name="mentee"
              noStyle
              rules={[{ required: true, message: 'Mentee is required' }]}
            >
              <Select placeholder="Please select a mentee">
                {mentees.map(mentee => {
                  return setMenteeValues(mentee);
                })}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item id="form_label" label="Time slot">
          <Input.Group>
            <Form.Item
              name="slot"
              noStyle
              rules={[{ required: true, message: 'Time slot is required' }]}
            >
              <Select placeholder="Please select a time slot.">
                <Option value="9am">9am</Option>
                <Option value="10am">10am</Option>
                <Option value="11am">11am</Option>
                <Option value="12pm">12pm</Option>
                <Option value="1pm">1pm</Option>
                <Option value="2pm">2pm</Option>
                <Option value="3pm">3pm</Option>
                <Option value="4pm">4pm</Option>
                <Option value="5pm">5pm</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        {/* https://ant.design/components/date-picker/#header
        default onChange
        function onChange(date, dateString) {
          console.log(date, dateString);
        } */}
        <Form.Item label="Date">
          <Input.Group>
            <Form.Item
              name="date"
              noStyle
              // rules={[{ required: true, message: 'Date is required' }]}
              onChange={e => handleDate(e)}
            >
              <Space direction="vertical">
                <DatePicker name="date" onChange={handleDate} />
              </Space>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EventForm;
