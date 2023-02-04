import '../cssComponents/UserCard.css'


const UserCard = (props) => {
    const {first_name ,last_name ,email,avatar} = props.data
    return (
        <div className='card1'>
            <div className='centreFlex'>
                
                <img src={avatar} alt="" />
            </div>
            
            <div  className='centreFlex' >
                <div>
                    <div style={{marginBottom:"5px"}}>
                         {first_name} {last_name}
                    </div>

                    <div>
                        Email:{email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard