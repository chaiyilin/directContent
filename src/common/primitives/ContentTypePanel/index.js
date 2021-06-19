import { Card } from "antd";

const ContentTypePanel = ({ header, children }) => {
  return <Card title={header}>{children}</Card>;
};

export default ContentTypePanel;
