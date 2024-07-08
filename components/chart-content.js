import { useMemo } from "react";
import PropTypes from "prop-types";

const ChartContent = ({
  className = "",
  actual,
  prop,
  changeIndicator,
  iconArrowarrowUp,
  propFlex,
  propMinWidth,
}) => {
  const chartContentStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[85px] text-left text-sm text-interface-text-default2 font-leading-none-text-sm-font-normal ${className}`}
      style={chartContentStyle}
    >
      <div className="relative leading-[18px] inline-block min-w-[42px]">
        {actual}
      </div>
      <div className="flex flex-col items-start justify-end text-11xl text-interface-text-title2">
        <div className="relative leading-[34px] font-semibold inline-block min-w-[69px] mq825:text-5xl mq825:leading-[27px] mq450:text-lg mq450:leading-[20px]">
          {prop}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[4px] text-base">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="relative leading-[20px] font-medium inline-block min-w-[49px]">
            {changeIndicator}
          </div>
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
            src={iconArrowarrowUp}
          />
        </div>
        <div className="flex flex-row items-center justify-end text-right text-xs text-interface-text-subtitle3">
          <div className="relative leading-[100%] inline-block min-w-[30px]">
            to LY
          </div>
        </div>
      </div>
    </div>
  );
};

ChartContent.propTypes = {
  className: PropTypes.string,
  actual: PropTypes.string,
  prop: PropTypes.string,
  changeIndicator: PropTypes.string,
  iconArrowarrowUp: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ChartContent;
