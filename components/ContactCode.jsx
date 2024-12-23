import styles from '../styles/ContactCode.module.css';

const contactItems = [
  // {
  //   social: 'website',
  //   link: 'nitinranganath.me',
  //   href: 'https://nitinranganath.me',
  // },
  {
    social: 'email',
    link: 'singhathervi001@gmail.com',
    href: 'mailto:athervisingh001@gmail.com',
  },
  {
    social: 'github',
    link: 'athervisingh',
    href: 'https://github.com/athervisingh',
  },
  {
    social: 'linkedin',
    link: 'athervi-singh',
    href: 'https://www.linkedin.com/in/athervi-singh/',
  },
  {
    social: 'twitter',
    link: 'AtherviSingh',
    href: 'https://www.linkedin.com/in/athervi-singh/',
  },
  // {
  //   social: 'instagram',
  //   link: 'iamnitinr',
  //   href: 'https://www.instagram.com/iamnitinr',
  // },
  // {
  //   social: 'polywork',
  //   link: 'nitinranganath',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
  {
    social: 'telegram',
    link: 'Athervi',
    href: 'https://t.me/Athervi',
  },
  // {
  //   social: 'codepen',
  //   link: 'nitinranganath',
  //   href: 'https://codepen.io/itsnitinr',
  // },
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
