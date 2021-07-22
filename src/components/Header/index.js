import CustomDrowdown from '../CustomDropdown';

const Header = (props) => {
  const { locations = [], onChangeLocation = () => { } } = props;
  return (
    <div className='navbar' style={{ flex: 1 }}>
      <div className='logo' style={{ flex: 1 }}>
        Rental Management System
      </div>
      <div style={{ flex: 1 }}>
        <CustomDrowdown
          options={locations}
          title="Select Location"
          onChange={onChangeLocation}
        />
      </div>
    </div>
  )
}

export default Header;