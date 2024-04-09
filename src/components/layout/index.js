import { memo } from 'react';
import './style.css';

function Layout({children}) {
  return (
    <div className='Layout'>
      <div className='Layout-rectangle' />
      {children}
    </div>
  )
}

export default memo(Layout);
