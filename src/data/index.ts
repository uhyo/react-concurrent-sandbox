import { sleep } from "../util/sleep";

/**
 * データをどこかから読み出す関数のつもり
 */
export const loadData = async (dataId: number): Promise<string> => {
  // 2秒かかる
  await sleep(2000);
  if (dataId === 0) {
    return "外部から読み込んだ何らかのデータ";
  } else if (dataId === 1) {
    return "外部から読み込んだもうひとつのデータ";
  } else if (dataId === 2) {
    return "何か別の外部データ";
  } else {
    return "そんなデータないよ";
  }
};
