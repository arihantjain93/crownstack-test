import { Locations } from './constants';

const initialState = {
  locations: [],
  error: null,
  selectedLocation: ''
}

const MainReducer = (state = initialState, action) => {
  switch(action.type) {
    case Locations.fetchLocationsSuccess:
      return {
        ...state,
        locations: action.payload,
      };
    case Locations.fetchLocationsError:
      return {
        ...state,
        error: true,
      };
    case Locations.SelectedLocationOrBranch:
      return {
        ...state,
        selectedLocation: action.payload,
      };
    default:
      return initialState;
  }
}

export default MainReducer;