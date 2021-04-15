import React, { memo, useState } from "react";
import { Tab } from "../Tab";

import { TabProps } from "../Tab/Tab.model";

import './Tabs.css';

type TabsProps = {
  data: TabProps[];
} & Pick<TabProps, 'onClick'>;

export const Tabs = memo<TabsProps>((props) => {
  const { data, onClick } = props;
  const [active, setActive] = useState(0);
  
  const handleClick = (index: number) => (value: TabProps['id']) => {
    onClick && onClick(value);
    setActive(index);
  }

  return (
    <div className="tabs">
      {data.map((tab, index) => {
        return (
          <Tab 
            {...tab}
            isActive={active === index}
            onClick={handleClick(index)}
            key={tab.id}
          />
        );
      })}
    </div>
  )
});