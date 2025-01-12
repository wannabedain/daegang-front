import { atom } from "recoil";

export const authState = atom({
  key: "authState", // 관리자 고유 키 : 시험해보기 위해서
  default: { isAuthenticated: false, user: null }, // 초기값
});
