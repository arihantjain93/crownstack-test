import _findIndex from 'lodash/findIndex';
import _take from 'lodash/take';

/* Breadcrumb managament - START */
const BREADCRUMBS_KEY = 'breadcrumbs';
export function getBreadcrumbs() {
  // return getStorage(BREADCRUMBS_KEY);
  return  JSON.parse(localStorage.getItem(BREADCRUMBS_KEY));
}

export function setBreadcrumbs(data) {
  // setStorage(BREADCRUMBS_KEY, data);
  localStorage.setItem(BREADCRUMBS_KEY, JSON.stringify(data));
}

export function pushToBreadcrumbs(data) {
  const breadcrumbs = getBreadcrumbs() || [];
  // first check the new data path is already in the existing list
  const linkIndex = _findIndex(breadcrumbs, { name: data.name });
  if (linkIndex > -1) {
    // if we already have that path in the list, slice till that part and set it
    const slicedList = _take(breadcrumbs, linkIndex + 1);
    setBreadcrumbs(slicedList);
  } else {
    // if not found, push the new path data
    breadcrumbs.push(data);
    setBreadcrumbs(breadcrumbs);
  }
}

export function resetBreadcrumbs() {
  // delStorage(BREADCRUMBS_KEY);
  localStorage.removeItem(BREADCRUMBS_KEY);
}
/* Breadcrumb managament - END */