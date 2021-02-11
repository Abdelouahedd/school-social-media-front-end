import React, { useEffect, useState } from 'react'
import {
  Calendar,
  Timeline,
  Col,
  Divider,
  Radio,
  Row,
  Select,
  Typography,
  Empty,
} from 'antd'

import axios from 'axios'

const RightSideBar = () => {
  const [events, setEvents] = useState([])
  const [token, setToken] = useState('')

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem('info'))
    setToken(info.token)

    axios
      .get('http://localhost:3000/api/v1/events', {
        headers: { Authorization: `Bearer ${info.token}` },
      })
      .then((res) => res.data)
      .then((data) => {
        setEvents(data)
        console.log(data)
      })
      .catch((err) => console.error(err))
  }, [])

  const onPanelChange = () => {
    console.log('panel changed')
  }

  return (
    <div className="site-calendar-customize-header-wrapper">
      {/*Calendar*/}
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0
          const end = 12
          const monthOptions = []

          const current = value.clone()
          const localeData = value.localeData()
          const months = []
          for (let i = 0; i < 12; i++) {
            current.month(i)
            months.push(localeData.monthsShort(current))
          }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option className="month-item" key={`${index}`}>
                {months[index]}
              </Select.Option>
            )
          }
          const month = value.month()

          const year = value.year()
          const options = []
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            )
          }
          return (
            <div className="py-2">
              <Typography.Title level={4}>Custom header</Typography.Title>
              <Row gutter={8}>
                <Col>
                  <Radio.Group
                    size="small"
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Radio.Button value="month">Month</Radio.Button>
                    <Radio.Button value="year">Year</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear)
                      onChange(now)
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={String(month)}
                    onChange={(selectedMonth) => {
                      const newValue = value.clone()
                      newValue.month(parseInt(selectedMonth, 10))
                      onChange(newValue)
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          )
        }}
        onPanelChange={onPanelChange}
      />
      {/*Time line for EVENT*/}
      <br />
      <Divider orientation="left">Evenements du mois</Divider>
      {events && events.length != 0 ? (
        <Timeline>
          {events.map((event) => (
            <Timeline.Item
              key={event.id}
              className={event.name.length % 2 === 0 ? 'green' : 'gray'}
            >
              <p>
                {event.name} ({event.localisation})
              </p>
              <p>Date: {event.deadline}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default RightSideBar
