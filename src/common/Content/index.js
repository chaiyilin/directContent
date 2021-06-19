import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import ContentTypePanel from "../primitives/ContentTypePanel";
import campaignPageContentType from "../contentTypes/CampaignPage/contentType";
import heroBannerContentType from "../contentTypes/HeroBanner/contentType";
import RecursiveContentUis from "./RecursiveContentUis";
const ContentEditor = lazy(() => import("./ContentEditor"));

const contentTypes = [campaignPageContentType, heroBannerContentType];

export const Content = () => {
  const { pathname } = useLocation();
  const Component = contentTypes.filter(
    (contentType) => contentType.route === pathname
  )?.[0]?.component;
  if (Component) {
    return <Component></Component>;
  }

  const contentType = contentTypes.filter(
    (contentType) => `${contentType.route}/edit` === pathname
  )?.[0];
  if (contentType?.component) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ContentEditor
          Left={contentType.component}
          Right={
            <RecursiveContentUis
              contentType={contentType}
            ></RecursiveContentUis>
          }
        />
      </Suspense>
    );
  }

  return null;
};

export default Content;
