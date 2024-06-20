import css from './IndexPage.module.css';
import { useState, useEffect } from 'react';

interface UserInfo {
  //   ID: string,
  //   LastName: string,
  //   FirstName: string,
  //   Department: string,
  //   Email: string,
  //   Icon: string,
  //   QuestHistory: Array<string>,
  //   Traits: Array<number>,
  //   HistoryTraits: Array<number>,
  //   Title: string,
  //   IconFrame: string,
  //   QuestBoxFrame: string,
  id: number;
  name: string;
  str: number;
  dex: number;
  cha: number;
  int: number;
}

interface Props {
  user: UserInfo;
}

export function UserProfileComponent({ user }: Props) {
  return (
    <div className={css.questbox}>
      <div>{user.name}</div>
      {/* <div>{user.HistoryTraits.map((item) => <p>{item}</p>)
      }</div> */}
      <div>{user.str}</div>
      <div>{user.dex}</div>
      <div>{user.cha}</div>
      <div>{user.int}</div>
    </div>
  );
}
