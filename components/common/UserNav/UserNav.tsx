import { Bag, Heart } from "@components/icons";
import Link from "next/link";
import React from "react";
import s from "./UserNav.module.css";

interface Props {
  toggleSidebar: () => void;
}

const UserNav = ({ toggleSidebar }: Props) => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item} onClick={toggleSidebar}>
          <Bag />
        </li>
        <li className={s.item}>
          <Link href={"/wishlist"}>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
