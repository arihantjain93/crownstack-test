import { Link } from 'react-router-dom';
import _forEach from 'lodash/forEach';
import _drop from 'lodash/drop';
import './style.css';

const renderLink = (item, index) => <Link key={index} className="breadcrumb-item" to={item.path}>{item.name}</Link>;

const renderAllLinks = (items, allLinks) => {
  const links = [];
  _forEach(items, (item, index) => {
    if (index === 0) {
      // no > symbol for first item
      links.push(renderLink(item, index));
    } else {
      links.push(<span key={`arrow-${index}`} className="breadcrumb-arrow">&gt;</span>);
      if (!allLinks && index === items.length - 1) {
        // last item - no link, just display
        links.push(<span key={index} className="breadcrumb-item active">{item.name}</span>);
      } else {
        links.push(renderLink(item, index));
      }
    }
  });
  return links;
};

function Breadcrumbs(props) {
  const MAX_LINKS_DISPLAY = 4;
  let links = props.items;
  if (props.items && props.items.length > MAX_LINKS_DISPLAY) {
    // display only the last particular (MAX_LINKS_DISPLAY) items
    links = _drop(links, (props.items.length - MAX_LINKS_DISPLAY));
  }
  return (<nav className="breadcrumb">
    {renderAllLinks(links, props.allLinks)}
  </nav>);
}

export default Breadcrumbs;
