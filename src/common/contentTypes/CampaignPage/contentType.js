import component from "./index";
import heroBannerContentType from "../HeroBanner/contentType";

const ContentUi = () => {
  return null;
};

const contentType = {
  name: "Campaign Page",
  route: "/campaign-page", // optional if the route is configured by contentEditor
  component, // the actual ui
  ContentUi, // the corrsponding content edit ui

  /* 
  1. contentType can also be an array. contentType: [HeroBannerContentType,CampaignBannerContentType]
  means this field accept both HeroBannerContentType and CampaignBannerContentType
  2. and each contentType in the array can also be an array means this field is an array type:
  contentType: [[HeroBannerContentType, CampaignBannerContentType]] 
  */
  contentTypeFields: [
    {
      fieldName: "heroBanner",
      fieldDisplayName: "Hero Banner",
      isArray: false,
      contentType: heroBannerContentType,
    },
  ],
};

export default contentType;
