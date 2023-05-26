import { auth } from '@/firebase/config';
import { useAuth } from '@/hooks/useAuth'
import { logoutThunkAction } from '@/store/authReducer';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Collapse, Row, Typography, message } from 'antd'
import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const { Panel } = Collapse;
const PanelStyled = styled(Panel)`
 &&& {
  .ant-collapse-header, p {
    color: white;
    padding:12px 0;
  }

  .ant-collapse-content-box {
    padding: 0 24px;
  }

  .btn-plus{
    padding:0;
    border:0;
    display:flex;
    align-items:center;
  }
 }
`
const LinkStyled = styled(Typography.Link)`
 display:block;
 margin-bottom:5px;
 color:white !important;
`
function Sidebar() {
  const { user } = useAuth()
  const dispatch = useDispatch()
  const handleLogOut  = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      message.success('Đăng xuất thành công')
      dispatch(logoutThunkAction())
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <div className='bg-slate-400 p-6 text-white h-screen'>
      <Col className='flex items-center justify-between' span={24}>
        <div className='flex items-center'>
          <Avatar src={user?.photoURL} />
          <Typography.Text className='ml-2 text-base'>{user?.displayName}</Typography.Text>
        </div>
        <Button ghost onClick={handleLogOut}>Đăng xuất</Button>
      </Col>
      <Col span={24}>
        <Collapse ghost defaultActiveKey={['1']} className='w-full'>
          <PanelStyled header='Danh sách phòng' key='1'>
            <LinkStyled>Phòng 1</LinkStyled>
            <LinkStyled>Phòng 2</LinkStyled>
            <LinkStyled>Phòng 3</LinkStyled>
            <LinkStyled>Phòng 4</LinkStyled>
            <Button ghost className='btn-plus' icon={<PlusSquareOutlined />}>Thêm phòng</Button>
          </PanelStyled>
        </Collapse>
      </Col>
    </div>
  )
}

export default Sidebar