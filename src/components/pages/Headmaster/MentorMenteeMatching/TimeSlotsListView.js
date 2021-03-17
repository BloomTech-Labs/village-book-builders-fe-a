import React from 'react';
import { Table } from 'antd';

const TimeSlotsListView = props => {
  const columns = [
    {
      title: 'Mentors',
      dataIndex: 'mentor',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.mentor.indexOf(value) === 0,
      sorter: (a, b) => a.mentor.length - b.mentors.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Slots',
      dataIndex: 'slot',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.slot - b.slot,
    },
    {
      title: 'Mentees',
      dataIndex: 'mentee',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.mentors.indexOf(value) === 0,
      sorter: (a, b) => a.mentee.length - b.mentee.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const data = [
    {
      key: '1',
      mentor: 'John Brown',
      slot: 32,
      mentee: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      mentor: 'Jim Green',
      slot: 42,
      mentee: 'Joe Black',
    },
    {
      key: '3',
      mentor: 'Joe Black',
      slot: 32,
      mentee: 'Jim Green',
    },
    {
      key: '4',
      mentor: 'Jim Red',
      slot: 32,
      mentee: 'John Brown',
    },
  ];
  return (
    <div className="container">
      <Table columns={columns} dataSource={data} onChange={onChange} />

      {/* <h3>Sunday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>4:00 pm</li>
      </ol>

      <h3>Monday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>4:00 pm</li>
      </ol>

      <h3>Tuesday</h3>
      <ol>
        <li>2:00 pm</li>
        <li>3:00 pm</li>
      </ol>

      <h3>Wednesday</h3>
      <ol>
        <li>2:00 pm</li>
        <li>3:00 pm</li>
      </ol>

      <h3>Thursday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>5:00 pm</li>
      </ol>

      <h3>Friday</h3>
      <ol>
        <li>3:00 pm</li>
        <li>5:00 pm</li>
      </ol>

      <h3>Saturday</h3>
      <ol>
        <li>1:00 pm</li>
        <li>2:00 pm</li>
      </ol> */}
    </div>
  );
};

export default TimeSlotsListView;
