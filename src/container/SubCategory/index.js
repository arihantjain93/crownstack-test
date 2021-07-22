import { useLocation } from "react-router-dom";
import { CategoryList, Breadcrumbs } from '../../components';
import { getBreadcrumbs } from '../../utils/breadcrumb';

const SubCategory = () => {
  const location = useLocation();
  const { categoryData = [] } = location;

  const renderBreadCrumb = () => {
    // first check if breadcrumb list is available - if yes, render the links from the list
    const breadcrumbs = getBreadcrumbs();
    if (breadcrumbs) {
      return <Breadcrumbs items={breadcrumbs} allLinks />;
    }
  }

  return (
    <div>
      <div>
        {renderBreadCrumb()}
        <span className="breadcrumb-arrow">&gt;</span>
        <span className="breadcrumb-item active">{categoryData && categoryData.name}</span>
      </div>
      <CategoryList categories={categoryData.subcategories} />
    </div>
  )
}

export default SubCategory;