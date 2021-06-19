import { Image } from "antd";

const HeroBanner = () => {
  return (
    <div>
      <Image width={200} height={200} src="error" />
    </div>
  );
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
