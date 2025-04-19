import { CopyRight } from "../../components/icons";

const Footer = () => {
  return (
    <div
      className="font-spartan bg-[#18181B] w-full text-[16px] pb-[31px] pt-[15px] text-white text-center flex items-center justify-center"
    >
      <CopyRight style={{ marginRight: '11px' }} />
      All Rights are reserved to Turflo.
    </div>
  );
};

export default Footer;