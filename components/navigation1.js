import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[9px] left-[9px] w-[668px] flex flex-col items-start justify-start pt-[301px] pb-[336px] pr-[71px] pl-20 box-border gap-[50px] max-w-full text-left text-5xl text-surface-component font-text-text-sm-font-normal ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/images/avatar.svg"
        />
        <img
          className="absolute top-[192.3px] left-[236.8px] w-[263.2px] h-[28.7px] z-[2]"
          loading="lazy"
          alt=""
          src="/images/group.svg"
        />
        <img
          className="absolute top-[141px] left-[236.5px] w-[262.3px] h-[46px] z-[2]"
          loading="lazy"
          alt=""
          src="/images/group-1.svg"
        />
        <img
          className="absolute top-[141px] left-[80px] w-[136.6px] h-20 z-[2]"
          loading="lazy"
          alt=""
          src="/images/group-2.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full">
        <div className="w-[374px] h-[90px] relative leading-[46px] inline-block max-w-full z-[2] mq450:text-lgi mq450:leading-[37px]">
          <span>{`Welcome to KHIMJI RAMDAS `}</span>
          <span className="text-13xl font-semibold">My Intranet Portal</span>
        </div>
        <div className="self-stretch relative text-lg leading-[28px] text-colors-neutral-200 z-[2]">
          Managing requests across different departments can be a daunting task.
          From IT to HR, every department has its unique needs and requests that
          need to be addressed promptly. This is where our Request Form Template
          comes in. It is designed to help you streamline your request
          management process, making it easier to track and manage requests from
          different departments.
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-brand-neutral-500 rounded-border-radius-rounded-full overflow-hidden flex flex-row items-start justify-start z-[2]">
        <div className="bg-gray flex flex-row items-start justify-start py-spacing-41 px-spacing-51 gap-[8px]">
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/images/iconessentialadd.svg"
          />
          <div className="relative text-lg leading-[22px] font-text-text-sm-font-normal text-surface-component text-left">
            Explore More Insights
          </div>
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/images/iconarrowarrowright.svg"
          />
        </div>
      </button>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
