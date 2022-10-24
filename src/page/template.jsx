import React, { Fragment } from 'react'
const Template = ({children}) => {


return (
    <Fragment>
        
        <div className='z-1 pb-28'>
            {children}
        </div>
        
    </Fragment>
)
}

export default Template