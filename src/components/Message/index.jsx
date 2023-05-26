import { Avatar, Typography } from 'antd'
import React from 'react'

function Message({text, displayName, createdAt,photoURL}) {
  return (
    <div className='mb-3'>
        <div className='flex items-center'>
            <Avatar size='small' src={photoURL}>A</Avatar>
            <Typography.Text className='font-bold ml-2'>{displayName}</Typography.Text>
            <Typography.Text className='font-light ml-2 text-xs'>{createdAt}</Typography.Text>
        </div>
        <div>
            <Typography.Text className='ml-1'>{text}</Typography.Text>
        </div>
    </div>
  )
}

export default Message