import { createSelector } from 'reselect';

const selectMainState = state => state.main;

const makeSelectLocations = () => createSelector(
  selectMainState,
  (substate) => substate.locations
);

export {
  makeSelectLocations
}