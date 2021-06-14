import { MutationTree } from "vuex";
import { TrimmingState, ItrimmingState } from "./models";

export const mutations: MutationTree<ItrimmingState> = {
  // 初期化
  init(state: ItrimmingState) {
    Object.assign(state, new TrimmingState());
  },
  setTrimmingState(state: ItrimmingState, payload: boolean): void {
    state.isOpeningTrimming = payload;
    state.uploadedImage = "";
  },
  setTrimmingImage(state: ItrimmingState, payload: string): void {
    state.uploadedImage = payload;
  },
  setCropImage(state: ItrimmingState, payload: string): void {
    state.cropImage = payload;
  },
  setBeforeUpdateImage(state: ItrimmingState, payload: string): void {
    state.beforeUpdateImage = payload;
  },
  setSelfIcon(state: ItrimmingState, payload: string): void { //自分のプロフィール情報の変更
    state.cropImage = payload;
  },
};