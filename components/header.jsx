import Link from "next/link";

const Header = () => {
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

export default Header;
