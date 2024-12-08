import { COLUMNS_TYPE1, COLUMNS_TYPE2, COLUMNS_TYPE3, URL_TYPE1, URL_TYPE2, URL_TYPE3 } from "./constants.js";
import type { Column } from "./types.js";

(() => {
  let columns: Column | undefined;

  if (location.href.match(URL_TYPE1)) {
    columns = COLUMNS_TYPE1;
  } else if (location.href.match(URL_TYPE2)) {
    columns = COLUMNS_TYPE2;
  } else if (location.href.match(URL_TYPE3)) {
    columns = COLUMNS_TYPE3;
  }

  if (!columns) {
    return;
  }

  for (const id in columns) {
    const element = document.querySelector<HTMLInputElement>(`#${id}`);
    if (element) {
      element.value = columns[id];
    }
  }
})();
