import React, { useState } from "react";
import styled from "styled-components";
import './style.css';

const UL = styled.ul`
  
  list-style: none;
  margin: 0;
  padding: 0;
`;
const LI = styled.li``;
const Item = styled.div`
  
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 18px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-top: 4px solid #000;

    transform: ${(props) => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const CustomDropdown = ({ title, options, onChange }) => {
  const [activeMenus, setActiveMenus] = useState('');
  const [isVisible, setVisible] = useState(false);

  const handleMenuClick = (data) => {
    onChange(data);
    setVisible(false);
    setActiveMenus('');
  };

  const handleArrowClick = (menuName, data) => {
    const close = (activeMenus === menuName) ? '' : menuName;
    setActiveMenus(close);
    onChange(data);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <div className="moduleGroup">
      <LI>
        <Item dept={dept}>
          <Label onClick={() => hasSubMenu ? handleArrowClick(menuName, data) : handleMenuClick(data)}>{data.name} </Label>
          {hasSubMenu && (
            <Arrow
              onClick={() => handleArrowClick(menuName, data)}
              toggle={activeMenus.includes(menuName)}
            />
          )}
        </Item>
        {hasSubMenu && (
          <div className="modulesSet">
            <SubMenu
              dept={dept}
              data={data.branches}
              toggle={activeMenus.includes(menuName)}
              menuIndex={menuIndex}
            />
          </div>
        )}
      </LI>
    </div>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <div className="singleModule" key={menuName}>
              <ListMenu
                dept={dept}
                data={menu}
                // hasSubMenu={menu.submenu}
                menuName={menuName}
                key={menuName}
                menuIndex={index}
              />
            </div>
          );
        })}
      </UL>
    );
  };

  const toggleHidden = () => {
    setVisible(!isVisible);
  }
  
  return (
    <div className="customDropdown" >
      <div className='title' onClick={toggleHidden}>
         {title}
       </div>
       <div className={`analyticsDropDown ${isVisible ? 'visible': ''}`}>
        <UL hidden={!isVisible}>
          {options.map((option, index) => {
            const dept = 1;
            const menuName = `sidebar-menu-${dept}-${index}`;

            return (
              <ListMenu
                dept={dept}
                data={option}
                hasSubMenu={option.branches}
                menuName={menuName}
                key={menuName}
                menuIndex={index}
              />
            );
          })}
        </UL>
      </div>
    </div>
  );
};

export default CustomDropdown;

