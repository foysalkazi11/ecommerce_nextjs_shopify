import { Bag, Heart } from "@components/icons";
import { useUIContext } from "@components/ui/context";
import Link from "next/link";
import React from "react";
import s from "./UserNav.module.css";

const UserNav = () => {
  const state = useUIContext();
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item} onClick={state.toggleSidebar}>
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
