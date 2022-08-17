import React from 'react'

const User = ({user}) => {

   return (
        <> 
            <div className='follower conversation'>
                <div> 
                    <img src={user?.userImg} alt="" className='followerImage' style={{width: '50px' , height: '50px'}}/>
                    <div className="name" style={{fontSize: '0.8rem'}}>
                           <span>{user?.name}</span> 
                    </div>
                </div>
            </div>
            <hr style={{widht: '85%' , border: '0.1px solid gray'}}/>
        </>
   )
 }

export default User