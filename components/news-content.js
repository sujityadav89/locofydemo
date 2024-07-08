import NewsItems from "./news-items";
import PropTypes from "prop-types";

const NewsContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-interface-surface-component-muted flex flex-col items-center justify-start py-spacing-10 px-20 box-border gap-[24px] max-w-full text-left text-sm text-interface-text-title2 font-leading-none-text-sm-font-normal lg:pl-10 lg:pr-10 lg:box-border mq825:pt-[26px] mq825:pb-[26px] mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq825:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[32px] max-w-full mq825:flex-wrap mq450:gap-[16px]">
          <div className="h-[18px] w-[88px] relative leading-[18px] font-semibold flex items-center">{`News & Alert`}</div>
          <div className="h-[38px] rounded-rounded-lg bg-interface-surface-component box-border overflow-x-auto flex flex-row items-start justify-start text-interface-text-primary border-[1px] border-solid border-interface-stroke-soft2">
            <div className="self-stretch w-[41px] bg-interface-surface-hc-primary overflow-hidden shrink-0 flex flex-row items-center justify-center text-interface-surface-component">
              <div className="self-stretch flex-1 bg-gray1-200 flex flex-row items-center justify-center py-spacing-251 px-spacing-33 gap-[8px]">
                <img
                  className="h-5 w-5 relative hidden"
                  alt=""
                  src="/images/iconessentialadd3.svg"
                />
                <div className="self-stretch flex-1 relative leading-[18px]">
                  All
                </div>
                <img
                  className="h-5 w-5 relative hidden"
                  alt=""
                  src="/images/iconarrowarrowright5.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[123px] bg-interface-surface-component overflow-hidden shrink-0 flex flex-row items-center justify-center z-[1] ml-[-1px] text-interface-text-subtitle3">
              <div className="self-stretch flex-1 bg-gray1-200 flex flex-row items-center justify-center py-spacing-251 px-spacing-33 gap-[8px]">
                <img
                  className="h-5 w-5 relative hidden"
                  alt=""
                  src="/images/iconessentialadd4.svg"
                />
                <div className="self-stretch flex-1 relative leading-[18px]">
                  Resource Type
                </div>
                <img
                  className="h-5 w-5 relative hidden"
                  alt=""
                  src="/images/iconarrowarrowright6.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[126px] bg-interface-surface-component overflow-hidden shrink-0 flex flex-row items-center justify-center z-[2] ml-[-1px] text-interface-text-subtitle3">
              <div className="self-stretch flex-1 bg-gray1-200 flex flex-row items-center justify-center py-spacing-251 px-spacing-33 gap-[8px]">
                <img
                  className="h-5 w-5 relative hidden"
                  alt=""
                  src="/images/iconessentialadd4.svg"
                />
                <div className="self-stretch flex-1 relative leading-[18px]">
                  Resource Topic
                </div>
                <img
                  className="h-5 w-5 relative hidden"
                  alt=""
                  src="/images/iconarrowarrowright6.svg"
                />
              </div>
            </div>
            <div className="h-[34px] bg-interface-surface-component overflow-hidden shrink-0 hidden flex-row items-center justify-center z-[4]">
              <div className="self-stretch bg-gray1-200 flex flex-row items-center justify-center p-2 gap-[8px]">
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconessentialadd5.svg"
                />
                <div className="self-stretch relative leading-[18px]">
                  Third
                </div>
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconarrowarrowright7.svg"
                />
              </div>
            </div>
            <div className="h-[34px] bg-interface-surface-component overflow-hidden shrink-0 hidden flex-row items-center justify-center z-[5]">
              <div className="self-stretch bg-gray1-200 flex flex-row items-center justify-center p-2 gap-[8px]">
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconessentialadd5.svg"
                />
                <div className="self-stretch relative leading-[18px]">
                  Third
                </div>
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconarrowarrowright7.svg"
                />
              </div>
            </div>
            <div className="h-[34px] bg-interface-surface-component overflow-hidden shrink-0 hidden flex-row items-center justify-center z-[6]">
              <div className="self-stretch bg-gray1-200 flex flex-row items-center justify-center p-2 gap-[8px]">
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconessentialadd5.svg"
                />
                <div className="self-stretch relative leading-[18px]">
                  Third
                </div>
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/iconarrowarrowright7.svg"
                />
              </div>
            </div>
            <div className="h-[34px] bg-interface-surface-component overflow-hidden shrink-0 hidden flex-row items-center justify-center z-[7]">
              <div className="self-stretch bg-gray1-200 flex flex-row items-center justify-center p-2 gap-[8px]">
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconessentialadd5.svg"
                />
                <div className="self-stretch relative leading-[18px]">
                  Third
                </div>
                <img
                  className="h-4 w-4 relative hidden"
                  alt=""
                  src="/images/iconarrowarrowright7.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end">
          <div className="flex flex-row items-center justify-end gap-[8px]">
            <div className="w-10 rounded-border-radius-rounded-md1 bg-interface-surface-component box-border flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-interface-stroke-default1">
              <img
                className="h-5 w-5 relative"
                alt=""
                src="/iconarrowarrowleft1.svg"
              />
            </div>
            <div className="w-10 rounded-border-radius-rounded-md1 bg-interface-surface-component box-border flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-interface-stroke-default1">
              <img
                className="h-5 w-5 relative"
                alt=""
                src="/iconarrowarrowright4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1760px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full text-xs text-brand-support-1-pure">
        <NewsItems
          iconMoneytag="/iconmoneytag.svg"
          pressRelease="Press Release"
          subjectArea="/subject-area@2x.png"
          multiPlanAnnouncesExtensi="MultiPlan Announces Extension of $100 Million Share Repurchase Program"
          markets="Markets"
          november82023="November 8, 2023"
        />
        <NewsItems
          iconMoneytag="/iconmoneytag.svg"
          pressRelease="Press Release"
          subjectArea="/subject-area-1@2x.png"
          multiPlanAnnouncesExtensi="MultiPlan Reports Third Quarter 2023 Results"
          markets="Investor Relation"
          november82023="November 7, 2023"
        />
        <NewsItems
          iconMoneytag="/iconmoneytag.svg"
          pressRelease="Press Release"
          subjectArea="/subject-area-2@2x.png"
          multiPlanAnnouncesExtensi="MultiPlan Corporation Announces Third Quarter 2023 Earnings Conference Call"
          markets="Investor Relation"
          november82023="October 5, 2023"
        />
        <NewsItems
          iconMoneytag="/iconmoneytag.svg"
          pressRelease="Press Release"
          subjectArea="/subject-area-3@2x.png"
          multiPlanAnnouncesExtensi="MultiPlan Named to Prestigious 2023 Fortune Best Workplaces in Health Care List"
          markets="In The News"
          november82023="September 7, 2023"
        />
        <NewsItems
          iconMoneytag="/iconmoneytag-4.svg"
          pressRelease="Article"
          subjectArea="/subject-area-4@2x.png"
          multiPlanAnnouncesExtensi="MultiPlan Announces Extension of $100 Million Share Repurchase Program"
          markets="Investor Relation"
          november82023="June 14, 2023"
        />
      </div>
    </div>
  );
};

NewsContent.propTypes = {
  className: PropTypes.string,
};

export default NewsContent;
