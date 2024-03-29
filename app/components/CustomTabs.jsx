"use state";

// Project imports
import {textStyle} from "../styles/globalStyles.js";

// AntD imports
import {Tabs} from "antd";

export default function CustomTabs({
                                       leftTitle,
                                       leftDetails,
                                       rightTitle,
                                       rightDetails,
                                   }) {
    // Content content
    const tabsItems = [
        {
            key: "1",
            label: `${leftTitle}`,
            children: `${leftDetails}`,
        },
        {
            key: "2",
            label: `${rightTitle}`,
            children: `${rightDetails}`,
        },
    ];

    return (
        <Tabs
            defaultActiveKey="1"
            items={tabsItems}
            centered
            style={textStyle}
        ></Tabs>
    );
}
