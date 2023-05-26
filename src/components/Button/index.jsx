import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

function Button({children,loading,disabled,...props}) {
  return (
    <button className={`btn rect btn-login flex items-center rounded-xl bg-gradient-to-r from-[#5dadfb] to-[#6c64fc] ${loading && 'cursor-not-allowed'}`} disabled={disabled} {...props}>{loading && <LoadingOutlined className='mr-2' />} {children}</button>
  )
}

export default Button