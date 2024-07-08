import PropTypes from "prop-types";

const NewsItems = ({
  className = "",
  iconMoneytag,
  pressRelease,
  subjectArea,
  multiPlanAnnouncesExtensi,
  markets,
  november82023,
}) => {
  return (
    <div
      className={`flex-1 rounded-border-radius-rounded-lg3 bg-interface-surface-component box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-[16px] max-w-full text-left text-xs text-brand-support-1-pure font-leading-none-text-sm-font-normal border-[1px] border-solid border-interface-stroke-soft2 ${className}`}
    >
      <div className="w-[121px] h-7 rounded-border-radius-rounded bg-brand-support-1-100 flex flex-row items-center justify-center py-spacing-152 px-spacing-253 box-border gap-[6px] whitespace-nowrap">
        <img className="h-3.5 w-3.5 relative" alt="" src={iconMoneytag} />
        <div className="self-stretch flex-1 relative leading-[16px] font-medium flex items-center">
          {pressRelease}
        </div>
      </div>
      <img
        className="self-stretch h-[170px] relative rounded-border-radius-rounded max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={subjectArea}
      />
      <div className="self-stretch relative text-base leading-[24px] font-medium text-interface-text-title2 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
        {multiPlanAnnouncesExtensi}
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-interface-text-default2 mq450:flex-wrap">
        <div className="h-7 w-[89px] rounded-border-radius-rounded bg-interface-surface-component-muted flex flex-row items-center justify-center py-spacing-152 px-spacing-253 box-border gap-[6px]">
          <img
            className="h-4 w-4 relative min-h-[16px]"
            alt=""
            src="/icontexttext.svg"
          />
          <div className="self-stretch flex-1 relative leading-[16px] font-medium flex items-center">
            {markets}
          </div>
        </div>
        <div className="h-4 w-[106px] relative leading-[16px] text-interface-text-subtitle3 flex items-center">
          {november82023}
        </div>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  className: PropTypes.string,
  iconMoneytag: PropTypes.string,
  pressRelease: PropTypes.string,
  subjectArea: PropTypes.string,
  multiPlanAnnouncesExtensi: PropTypes.string,
  markets: PropTypes.string,
  november82023: PropTypes.string,
};

export default NewsItems;
