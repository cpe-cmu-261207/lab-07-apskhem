import { FC } from "react";
import Link from "next/link";

const Header: FC<{ rootPath: string }> = (props) => {
  return (
    <header>
      <div>
        <div className="text-container">
          <Link href={props.rootPath}>
            <li className="header-text">LAB07</li>
          </Link>
        </div>
        <input type="text" placeholder="Find something interesting..."/>
        <div className="signin-btn">Sign In</div>
      </div>
    </header>
  );
}

export default Header;
