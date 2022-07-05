import './contact.styles.scss'

const href = (info) => {
  if (info.includes('@')) {
    return `mailto: ${info}`;
  } 
    return `https://${info}`;
}

const Contact = ({ contact }) => {
  return (
    <div className='contact-info'>
      {
        contact.map((contact) => {
          return (
            <a href={href(contact.info)} key={contact.image}>
              <img src={contact.image} alt='' />
              {contact.info}
            </a>
          );
        })
      }
    </div>
  )
}

export default Contact;