import Link from 'next/link';

function NextLink(props) {
  const { href, children, className } = props;
  // Must add passHref to Link
  let link;
  if (href === undefined || href === '') {
    link = <a className={className}>{children}</a>;
  }
  if (href) {
    link = (
      <Link href={href} passHref>
        <a className={className}>{children}</a>
      </Link>
    )
  }
  return link;
}

export default NextLink;