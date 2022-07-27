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
            <a href={href(contact.info)} target='_blank' rel='noreferrer' key={contact.image}>
              <img src={contact.image} alt='' width='20' height='20' />
              {contact.info}
            </a>
          );
        })
      }
    </div>
  )
}

export default Contact;