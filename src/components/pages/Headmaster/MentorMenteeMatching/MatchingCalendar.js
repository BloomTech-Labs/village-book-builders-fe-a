import {
  Calendar,
  Badge,
  Form,
  Input,
  DatePicker,
  Select,
  Space,
  Button,
  Modal,
} from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import {} from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import MiniMentorList from './MiniMentorList';
import MiniMenteeList from './MiniMenteeList';
import { fetchCalendar } from '../../../../state/actions/index';
import EventForm from './EventForm';
import EventDetails from './EventDetails';

const initialState = {
  date: '',
  type: 'success',
  content: '',
};

const MatchingCalendar = props => {
  const { fetchCalendar } = props;
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [currentEvent, setCurrentEvent] = useState({});
  useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar]);

  const onSelect = dateString => {
    let val = moment(dateString).format('D');

    if (showModal) {
      // Closing Modal
      setShowModal(false);
      setCurrentEvent({});
      setEditing(false);
    } else {
      // Opening Modal
      let eventSelected = events.filter(e => Number(e.case) == val)[0];
      setCurrentEvent(eventSelected);
      setShowModal(true);
    }
  };

  //-----------------------start calendar code - https://ant.design/components/calendar/
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {}

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }

  function getListData(value) {
    let listData;
    let filterEvents;
    switch (value.date()) {
      //this is how to apply props to calendar data - will need to passed through in function from the form in future builds.
      //Per TPL here is where to start.
      //So here's some example code:
      // for (elem of props.match) {
      //   let appt = {
      //     type: 'success'
      //   }
      //   appt.content = `${elem.mentee} & ${elem.mentor}, ${elem.time}`
      //   appt.date = elem.date.slice('/')[2]
      //   console.log(appt)
      // }
      // that can pull from those props and turn them into appt objects that fit your format;
      // what you would need to do is figure out how to got them into that function such that
      // the appt.date files them into the appropriate switch statement

      // That slice() function is just grabbing the data from that string as the relevant single number,
      // you'd want to make sure to convert it to an int if necessary

      //It might mean having different variables in each of those switch statements rather than using
      // listData every time, but depends how you set it up I suppose.

      // case 1:
      //   listData = [
      //     {
      //       type: 'success',
      //       content: `Mentor ${props.match[0]['mentee']} & Mentee ${props.match[0]['mentor']} @ ${props.match[0]['time']}`,
      //     },
      //   ];
      //   break;
      // case 5:
      //   listData = [
      //     {
      //       type: 'success',
      //       content: `Mentor ${props.match[0]['mentee']} & Mentee ${props.match[0]['mentor']} @ ${props.match[0]['time']}`,
      //     },
      //   ];
      //   break;
      // case 11:
      //   listData = [
      //     {
      //       type: 'success',
      //       content: `Mentor ${props.match[0]['mentee']} & Mentee ${props.match[0]['mentor']} @ ${props.match[0]['time']}`,
      //     },
      //   ];
      //   break;
      // case 16:
      //   listData = [
      //     {
      //       type: 'success',
      //       content: `Mentor ${props.match[0]['mentee']} & Mentee ${props.match[0]['mentor']} @ ${props.match[0]['time']}`,
      //     },
      //   ];
      //   break;
      case 1:
        filterEvents = events.filter(i => Number(i.case) === 1);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 2:
        filterEvents = events.filter(i => Number(i.case) === 2);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 3:
        filterEvents = events.filter(i => Number(i.case) === 3);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 4:
        filterEvents = events.filter(i => Number(i.case) === 4);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 5:
        filterEvents = events.filter(i => Number(i.case) === 5);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 6:
        filterEvents = events.filter(i => Number(i.case) === 6);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 7:
        filterEvents = events.filter(i => Number(i.case) === 7);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 8:
        filterEvents = events.filter(i => Number(i.case) === 8);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 9:
        filterEvents = events.filter(i => Number(i.case) === 9);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 10:
        filterEvents = events.filter(i => Number(i.case) === 10);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 11:
        filterEvents = events.filter(i => Number(i.case) === 11);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 12:
        filterEvents = events.filter(i => Number(i.case) === 12);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 13:
        filterEvents = events.filter(i => Number(i.case) === 13);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 14:
        filterEvents = events.filter(i => Number(i.case) === 14);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 15:
        filterEvents = events.filter(i => Number(i.case) === 15);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 16:
        filterEvents = events.filter(i => Number(i.case) === 16);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 17:
        filterEvents = events.filter(i => Number(i.case) === 17);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 18:
        filterEvents = events.filter(i => Number(i.case) === 18);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 19:
        filterEvents = events.filter(i => Number(i.case) === 19);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 20:
        filterEvents = events.filter(i => Number(i.case) === 20);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 21:
        filterEvents = events.filter(i => Number(i.case) === 21);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 22:
        filterEvents = events.filter(i => Number(i.case) === 22);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 23:
        filterEvents = events.filter(i => Number(i.case) === 23);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 24:
        filterEvents = events.filter(i => Number(i.case) === 24);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 25:
        filterEvents = events.filter(i => Number(i.case) === 25);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 26:
        filterEvents = events.filter(i => Number(i.case) === 26);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 27:
        filterEvents = events.filter(i => Number(i.case) === 27);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 28:
        filterEvents = events.filter(i => Number(i.case) === 28);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 29:
        filterEvents = events.filter(i => Number(i.case) === 29);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 30:
        filterEvents = events.filter(i => Number(i.case) === 30);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      case 31:
        filterEvents = events.filter(i => Number(i.case) === 31);
        if (events.length) {
          listData = filterEvents.map(e => {
            return { content: e.content, type: e.type };
          });
          break;
        } else {
          break;
        }
      default:
    }
    return listData || [];
  }
  //-----------------------end calendar code

  //set selection type for standard drop menu in form
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
  console.log(props.mentees);

  return (
    <div>
      <h1>Mentor - Mentee Matching</h1>
      <div className="calStyling">
        {events.length > 0 ? (
          <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
            onPanelChange={onPanelChange}
            onSelect={onSelect}
          />
        ) : (
          ''
        )}
      </div>
      <h3>Please complete all the fields below to fill a time slot.</h3>

      <Form onFinish={onFinish}>
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
                {props.mentors.map(mentor => {
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
                {props.mentees.map(mentee => {
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
      <div className="miniListContainer">
        <MiniMentorList />
        <MiniMenteeList />
      </div>
      <Modal
        className="menteeModal"
        visible={showModal}
        title="Event Details"
        onCancel={() => {
          setShowModal(!showModal);
        }}
        maskClosable
        destroyOnClose
        okText="Submit"
        footer={[
          <Button key="edit" onClick={() => setEditing(true)}>
            Edit
          </Button>,
          <Button key="submit" onClick={() => setEditing(false)}>
            View
          </Button>,
        ]}
      >
        {editing ? (
          <EventForm
            currentEvent={currentEvent}
            events={events}
            setEvents={setEvents}
            mentees={props.mentees}
            mentors={props.mentors}
          />
        ) : (
          <EventDetails currentEvent={currentEvent} />
        )}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.headmasterReducer.isLoading,
    mentees: state.headmasterReducer.mentees,
    match: state.headmasterReducer.match,
    mentors: state.headmasterReducer.mentors,
  };
};

export default connect(mapStateToProps, { fetchCalendar })(MatchingCalendar);
