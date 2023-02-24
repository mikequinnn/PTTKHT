import React, { useState } from 'react'
import './CreateRoom.less'

import { Typography, Radio, Checkbox, Form, Input } from 'antd'
import InputCurrency from '../../../components/InputCurrency/InputCurrency'

const { Title } = Typography

const RoomInformation: React.FC = () => {
  const [parking, setParking] = useState(false)

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  return (
    <div>
      <Title style={{ textAlign: 'center' }}>Thanh toán</Title>
      {/* <Form.Item name='roomType'>
        <Radio.Group>
          <Radio style={radioStyle} value={1}>
            Kí túc xá/ Homestay
          </Radio>
          <Radio style={radioStyle} value={2}>
            Phòng cho thuê
          </Radio>
          <Radio style={radioStyle} value={3}>
            Phòng ở ghép
          </Radio>
          <Radio style={radioStyle} value={4}>
            Nhà nguyên căn
          </Radio>
          <Radio style={radioStyle} value={5}>
            Căn hộ
          </Radio>
        </Radio.Group>
      </Form.Item> */}

      <Title level={4}>Email</Title>
      <Form.Item name='email'>
        <InputCurrency placeholder='Email' />
      </Form.Item>

      <Title level={4}>Số điện thoại</Title>
      <Form.Item name='phone'>
        <Input size='large' placeholder='Nhập số điện thoại của bạn' />
      </Form.Item>

      <Title level={4}>Số thẻ</Title>
      <Form.Item name='phone'>
        <Input size='large' placeholder='Số thẻ' />
      </Form.Item>

      <Title level={4}>Địa chỉ</Title>
      <Form.Item name='phone'>
        <Input size='large' placeholder='Địa chỉ' />
      </Form.Item>
    </div>
  )
}

export default RoomInformation
