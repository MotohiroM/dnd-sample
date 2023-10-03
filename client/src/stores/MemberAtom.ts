import { atom, selector } from 'recoil';
import * as storeKey from './storeKey';
import ja from '../data/input/ja.json';

export type memberType = {
  id: number;
  position: string;
  nameJa: string;
  nameEn: string;
  finalEducation: string;
  message: string;
};

const memberList = ja.member.career.map((member) => {
  return {
    id: member.id,
    nameJa: member.nameJa,
    nameEn: member.nameEn.slice(2),
    position: member.position,
    finalEducation: member.finalEducation,
    message: member.message,
  };
});

export const MemberAtom = atom<memberType[]>({
  key: storeKey.MEMBER_ATOM_KEY,
  default: memberList,
});

export const MemberSelector = selector<memberType[]>({
  key: storeKey.MEMBER_SELECTOR_KEY,
  get: ({ get }) => get(MemberAtom),
  set: ({ set }, newValue) => set(MemberAtom, newValue),
});
