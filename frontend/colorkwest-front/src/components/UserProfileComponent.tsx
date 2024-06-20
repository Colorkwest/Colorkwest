import css from './IndexPage.module.css';
import { useState, useEffect } from "react";

interface UserInfo {
  ID: string,
  LastName: string,
  FirstName: string,
  Department: string,
  Email: string,
  Icon: string,
  QuestHistory: Array<string>,
  Traits: Array<number>,
  HistoryTraits: Array<number>,
  Title: string,
  IconFrame: string,
  QuestBoxFrame: string,
}

interface Props {
  user: UserInfo;
}

export function UserProfileComponent({ user }: Props) {

  return (
    <div className={css.questbox}>
      <div>{user.LastName} {user.FirstName}</div>
      <div>{user.HistoryTraits.map((item) => <p>{item}</p>)
      }</div>
      <div>{user.HistoryTraits}</div>
    </div >
  );
}
