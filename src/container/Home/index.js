import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CategoryList } from '../../components';
import { pushToBreadcrumbs, resetBreadcrumbs } from '../../utils/breadcrumb';
import './style.css';

function prepareCategories(data) {
  let categories = [];
  if (data.branches) {
    data.branches.map((branch) => {
      categories = [...categories, ...branch.categories];
    })
  } else if(data.categories) {
    categories = data.categories;
  }

  return categories;
}

const Home = (props) => {
  const { selectedLocation, history } = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = prepareCategories(selectedLocation);
    setCategories(allCategories);
  }, [selectedLocation.name]);

  useEffect(() => {
    resetBreadcrumbs();
  }, []);

  const onCategoryClick = (category) => {
    const currentPage = {
      name: 'Equipment Catalog',
      path: `/`,
    };

    pushToBreadcrumbs(currentPage);
    history.push({
      pathname: `/category`,
      categoryData: category,
    })
  }

  return (
    <div>
      {categories && categories.length <= 0 &&
        <div className="center">
          Welcome to the Rental Management System
          <div style={{textAlign: 'center', paddingTop: 10}}>Please Select Location</div>
        </div>
      }
      <CategoryList categories={categories} history={history} onCategoryClick={onCategoryClick} />
    </div>
  )
}

const structuredSelector = createStructuredSelector({
  locations: state => state.main.locations,
  error: state => state.main.error,
  selectedLocation: state => state.main.selectedLocation,
});

export default connect(structuredSelector, null)(Home);