import PropTypes from "prop-types";

const TopNavigationContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1860px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[17px] shrink-0 max-w-full ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-end max-w-full text-right text-sm text-interface-surface-component font-leading-none-text-sm-font-normal">
        <div className="w-[759px] [background:linear-gradient(-90deg,_#122230,_rgba(30,_72,_107,_0.32)_66.15%,_rgba(35,_76,_110,_0)_76.26%)] flex flex-row items-center justify-end py-4 px-10 box-border max-w-full z-[1] mq450:gap-[20px]">
          <div className="w-[274px] flex flex-row items-center justify-between gap-[20px]">
            <div className="w-[88px] flex flex-row items-start justify-start gap-[40px]">
              <div className="h-6 w-6 rounded-21xl bg-gray1-300 flex flex-row items-center justify-center">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/images/-icon-notifications-active.svg"
                />
              </div>
              <div className="h-6 w-6 rounded-21xl bg-gray1-300 flex flex-row items-center justify-center">
                <img
                  className="h-6 w-6 relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/images/group-325@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[16px]">
              <div className="flex flex-col items-end justify-center gap-[6px]">
                <div className="relative leading-[100%] font-medium inline-block min-w-[98px] whitespace-nowrap">
                  David Williams
                </div>
                <a className="[text-decoration:none] relative text-2xs text-[inherit] inline-block min-w-[37px]">
                  Logout
                </a>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px] text-left text-interface-text-default">
                <img
                  className="h-8 w-8 relative rounded-81xl object-cover"
                  loading="lazy"
                  alt=""
                  src="/images/avatar1@2x.png"
                />
                <div className="hidden flex-col items-start justify-start gap-[4px]">
                  <div className="h-3.5 relative leading-[14px] font-semibold inline-block whitespace-nowrap">
                    Jese Leos
                  </div>
                  <div className="h-3 relative text-xs leading-[12px] text-interface-text-subtitle inline-block whitespace-nowrap">
                    Joined in August 2014
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <img
        className="w-[399.2px] relative max-h-full overflow-hidden object-contain max-w-full z-[1]"
        loading="lazy"
        alt=""
        src="/images/multiplan-2@2x.png"
      />
    </div>
  );
};

TopNavigationContainer.propTypes = {
  className: PropTypes.string,
};

export default TopNavigationContainer;
