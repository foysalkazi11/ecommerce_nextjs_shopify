import Link from "next/link";
import React, { FC } from "react";
import { Container } from "../../ui";
import s from "./Hero.module.css";

interface Props {
  headline: string;
  discripation: string;
}

const Hero: FC<Props> = ({ discripation, headline }) => {
  return (
    <div className="bg-black ">
      <Container EL={"div" as any}>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div>
            <p className={s.discripation}>{discripation}</p>
            <Link href="#">
              <a className={s.link}>More info</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
