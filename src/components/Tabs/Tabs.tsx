import React, { memo } from "react";
import { Tab} from "../Tab";

import { TabProps } from "../Tab/Tab.model";

import './Tabs.css';

type TabsProps = {
  data: TabProps[];
} & Pick<TabProps, 'onClick'>;

export const Tabs = memo<TabsProps>((props) => {
  const { data, onClick } = props;
  return (
    <div className="tabs">
      {data.map((tab) => <Tab onClick={onClick} key={tab.id} {...tab} />)}
    </div>
  )
});