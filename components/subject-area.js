import { useMemo } from "react";
import PropTypes from "prop-types";

const SubjectArea = ({
  className = "",
  businesswomanUsingTabletA,
  title,
  propFlexDirection,
}) => {
  const subjectAreaStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  return (
    <div
      className={`flex-1 rounded-border-radius-rounded-lg3 bg-interface-surface-component overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[130px] px-0 pb-0 box-border relative max-w-full text-left text-sm text-interface-text-title2 font-leading-none-text-sm-font-normal ${className}`}
      data-scroll-to="subjectAreaContainer"
      style={subjectAreaStyle}
    >
      <img
        className="h-[261px] w-full absolute !m-[0] right-[0px] bottom-[-76px] left-[0px] max-w-full overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src={businesswomanUsingTabletA}
      />
      <img
        className="h-full w-[123px] absolute !m-[0] top-[0px] bottom-[0px] left-[-10px] max-h-full z-[1]"
        alt=""
        src="/images/rectangle-4566.svg"
      />
      <img
        className="h-full w-[93px] absolute !m-[0] top-[0px] bottom-[0px] left-[-10px] max-h-full z-[2]"
        alt=""
        src="/images/rectangle-4568.svg"
      />
      <img
        className="h-full w-[63px] absolute !m-[0] top-[0px] bottom-[0px] left-[-10px] max-h-full z-[3]"
        alt=""
        src="/images/rectangle-4567.svg"
      />
      <div className="h-10 flex-1 bg-gray1-400 flex flex-row items-start justify-start pt-3 px-spacing-42 pb-spacing-253 box-border whitespace-nowrap max-w-full z-[4]">
        <div className="self-stretch w-[124px] relative leading-[18px] font-semibold flex items-center">
          {title}
        </div>
      </div>
    </div>
  );
};

SubjectArea.propTypes = {
  className: PropTypes.string,
  businesswomanUsingTabletA: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propFlexDirection: PropTypes.any,
};

export default SubjectArea;
