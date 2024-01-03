import { atom } from "recoil";

export const billState = atom({
    key: 'bill',
    default: ''
});

export const peopleAmountState = atom({
  key: 'peopleAmount',
  default: ''
});

export const tipState = atom({
  key: 'tip',
  default: 0
});