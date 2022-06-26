import './contact.styles.scss'

const Contact = ({ contact }) => {
  return (
    <div className='contact-info'>
      {
        contact.map((contact) => {
          return (
            <p key={contact.image}>
              <img src={contact.image} alt='' />
              {contact.info}
            </p>
          );
        })
      }
    </div>
  )
}

export default Contact;