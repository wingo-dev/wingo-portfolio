const BackMobile = ({ changeMobileMenu, mobileMenu }) => {
  return (
    <span
      className="back-mobile"
      id="back-mobile"
      onClick={() => changeMobileMenu(false)}
    >
      <i className="fa fa-arrow-left" />
    </span>
  );
};
export default BackMobile;
