import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocations } from './selector';
import { Header } from '../../components';
import { fetchLocation, saveSelectedLocation } from './actions';
import './style.css'
const Main = (props) => {
  const { saveSelectedLocation, locations } = props;

  useEffect(() => {
    props.fetchLocation();
  }, []);

  return (
    <div className="mainLayoutContainer">
      <Header
        locations={locations && locations.locations}
        onChangeLocation={saveSelectedLocation}
      />
      <div className="maincontent">
        {props.children}
      </div>
    </div>
  )
}

const structuredSelector = createStructuredSelector({
  locations: makeSelectLocations(),
});

const mapDispatchToProps = (dispatch) => ({ 
  fetchLocation: () => dispatch(fetchLocation()),
  saveSelectedLocation: (location) => dispatch(saveSelectedLocation(location))
});

export default connect(structuredSelector, mapDispatchToProps)(Main);