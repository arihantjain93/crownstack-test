import { Locations } from './constants';

export const fetchLocationSuccess = (data) => {
  return {
    type: Locations.fetchLocationsSuccess,
    payload: data
  };
}

export const fetchLocation = (data) => {
  return {
    type: Locations.fetchLocations,
    payload: data
  }
}

export const fetchLocationError = (data) => {
  return {
    type: Locations.fetchLocationsError,
    payload: data
  }
}

export const saveSelectedLocation = (data) => {
  return {
    type: Locations.SelectedLocationOrBranch,
    payload: data
  }
}