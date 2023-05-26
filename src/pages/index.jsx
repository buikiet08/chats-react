import Message from '@/components/Message';
import Sidebar from '@/components/Sidebar'
import { UserAddOutlined } from '@ant-design/icons';

import { Avatar, Button, Col, Form, Input, Row, Tooltip } from 'antd'
import styled from 'styled-components';

const ContentStyled = styled(Col)`
  height:calc(100% - 117px);
`
export const Home = () => {
  return (
    <Row className='h-screen overflow-hidden'>
      <Col span={6}>
        <Sidebar />
      </Col>
      <Col span={18} className='h-screen'>
        <div className='flex justify-between items-center p-4 border-b border-b-slate-100'>
          <div>
            <p className='text-base font-bold'>Phòng 1</p>
            <span className='font-light'>Đây là phòng 1</span>
          </div>

          <div className='flex justify-center items-center'>
            <Button className='flex items-center mr-3' icon={<UserAddOutlined />}>Mời</Button>
            <Avatar.Group size='small' maxCount={2}>
              <Tooltip title='A'>
                <Avatar>A</Avatar>
              </Tooltip>
              <Tooltip title='A'>
                <Avatar>B</Avatar>
              </Tooltip>
              <Tooltip title='A'>
                <Avatar>V</Avatar>
              </Tooltip>
              <Tooltip title='A'>
                <Avatar>A</Avatar>
              </Tooltip>
              <Tooltip title='A'>
                <Avatar>A</Avatar>
              </Tooltip>
              <Tooltip title='A'>
                <Avatar>A</Avatar>
              </Tooltip>
            </Avatar.Group>
          </div>
        </div>

        <ContentStyled className='flex flex-col'>
          <div className='flex-1 h-full p-4 !pb-0 flex flex-col justify-end items-start max-h-full overflow-y-scroll'>
            <Message displayName='Thành Long' text='Xin chào mọi người' createdAt='20:00'  />
            <Message displayName='Thành Long' text='Xin chào mọi người' createdAt='20:00'  />
            <Message displayName='Thành Long' text='Xin chào mọi người' createdAt='20:00'  />
          </div>
          <div className='border-t border-t-slate-100 p-4'>
            <Form className='flex justify-between items-center'>
              <Form.Item className='flex-1 mb-0'>
                <Input />
              </Form.Item>
              <Button>Gửi</Button>
            </Form>
          </div>
        </ContentStyled>
      </Col>
    </Row>
  )
}

export default Home