const CategoryList = (props) => {
  const { categories = [], onCategoryClick = () => {} } = props;

  const goToRoute = (category) => {
    onCategoryClick(category);
  }

  return (
    <div className="test">
      {categories.map((category, index) => {
        // read from here:
        // https://www.c-sharpcorner.com/blogs/error-handling-while-use-image-render-in-react-js-application
        let image_path = '';
        const showArrow = category.subcategories && category.subcategories.length > 0 ? ">" : "";
        try {
          image_path = require(`../../assets/images/${category.image}`);
        } catch (err) {
          // set placeholder image if not present in assets folder
          image_path = require(`../../assets/images/placeholderImage.png`);
        }
        return (
          <div
            key={index}
            className="square"
            onClick={() => goToRoute(category)}
          >
            <img
              src={image_path.default}
              alt={category.name}
              width="100"
              height="50"
            />
            <div style={{ height: 20, backgroundColor: 'blue' }}>{category.name + showArrow}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryList;