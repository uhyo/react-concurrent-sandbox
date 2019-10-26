import { sleep } from "../util/sleep";

/**
 * データをどこかから読み出す関数のつもり
 */
export const loadData = async (dataId: number): Promise<string> => {
  if (dataId === 0) {
    // これは2秒かかる
    await sleep(2000);
    return "外部から読み込んだ何らかのデータ";
  } else if (dataId === 1) {
    // これは1秒
    await sleep(1000);
    return "外部から読み込んだもうひとつのデータ";
  } else if (dataId === 2) {
    // これは3秒
    await sleep(3000);
    return "何か別の外部データ";
  } else {
    await sleep(500);
    return `${dataId}番のデータはないよ`;
  }
};
