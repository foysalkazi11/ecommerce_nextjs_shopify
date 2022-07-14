import { Container } from "@components/ui";
import Link from "next/link";
import React from "react";
import UserNav from "../UserNav";
import s from "./Navbar.module.css";

interface Props {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: Props) => {
  return (
    <Container>
      <div className={s.root}>
        <div className="flex items-center">
          <Link href={"/"}>
            <a className={s.logo}>NEXT_STORE</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href={"#"}>
              <a className={s.link}>ALL</a>
            </Link>
            <Link href={"#"}>
              <a className={s.link}>Clothes</a>
            </Link>
            <Link href={"#"}>
              <a className={s.link}>Accesories</a>
            </Link>
            <Link href={"#"}>
              <a className={s.link}>Shoes</a>
            </Link>
          </nav>
        </div>
        <UserNav toggleSidebar={toggleSidebar} />
      </div>
    </Container>
  );
};

export default Navbar;
