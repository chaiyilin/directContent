import { Image } from "antd";

const HeroBanner = ({ src }) => {
  return <div>{src && <Image src={src} />}</div>;
};

// HeroBanner.propTypes = {
//   imgDesktop: PropTypes.shape({
//     url: PropTypes.string,
//     alt: PropTypes.string,
//   }),
//   imgMobile: PropTypes.shape({
//     url: PropTypes.string,
//     alt: PropTypes.string,
//   }),
//   header: PropTypes.string.isRequired,
//   subHeader: PropTypes.string,
//   bgColor: PropTypes.string,
//   CTA: PropTypes.shape({
//     uri: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     target: PropTypes.string,
//     bgColor: PropTypes.string,
//     fontColor: PropTypes.string,
//   }),
// };

export default HeroBanner;
