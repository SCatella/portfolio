import './user.styles.scss';

const User = ({user}) => {
  return (
    <div className='user'>
      <h1 className='name'>
        {`${user.firstName} ${user.lastName}`}
      </h1>
      <h4 className='title'>
        {`${user.title}`}
      </h4>
      <p className='statement'>
        {`${user.statement}`}
      </p>
    </div>
  )
}

export default User;