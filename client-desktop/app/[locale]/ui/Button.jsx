'use client';

import Link from 'next/link';

const Button = ({ styles, className, title, href, onClick }) => {
  const classes = `${className} flex rounded outline-none inline-flex items-center justify-center`;
  return (
    <button className={classes} style={styles} onClick={() => onClick()}>
      {href && <Link href={href}>{title}</Link>}
      {!href && title}
    </button>
  );
};

export default Button;
