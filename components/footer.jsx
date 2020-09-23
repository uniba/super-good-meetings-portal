import Link from "next/link";

const Footer = () => {
  return (
    <ul>
      <li>
        <Link href="/terms">利用規約</Link>
      </li>
      <li>
        <Link href="/privacy">プライバシーポリシー</Link>
      </li>
    </ul>
  );
};

export default Footer;
