import HeroBanner from "../HeroBanner";
const CampaignPage = ({ content }) => {
  const { heroBanner } = content;
  return <HeroBanner src={heroBanner?.image?.src}></HeroBanner>;
};

export default CampaignPage;
