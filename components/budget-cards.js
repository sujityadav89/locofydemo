import PropTypes from "prop-types";

const BudgetCards = ({
  className = "",
  requestsCAPEXEACE,
  noOfTotalRequests,
  currency,
  trendValue,
  pendingRequests,
  requestAmount,
  rejectedRequests,
  usedAmount,
  approvedRequests,
  availableAmount,
  actionPendingRequests,
  averageAmount,
  pendingRequests1,
  rejectedRequests1,
}) => {
  return (
    <div
      className={`flex-1 rounded-border-radius-rounded-xl bg-surface-component overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-8 box-border gap-[24px] min-w-[429px] max-w-full text-left text-5xl text-text-default font-text-text-sm-font-normal mq850:min-w-full mq450:pt-5 mq450:pb-[21px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-title mq850:flex-wrap">
        <div className="w-[307px] flex flex-col items-start justify-start gap-[8px]">
          <h2 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-lgi mq450:leading-[22px]">
            {requestsCAPEXEACE}
          </h2>
          <div className="w-[98px] h-1.5 relative rounded-border-radius-rounded-xl bg-colors-highlight-500" />
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <button className="cursor-pointer p-0 bg-surface-component rounded-border-radius-rounded-full overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-interface-stroke-default">
            <div className="bg-gray flex flex-row items-start justify-start py-spacing-25 px-spacing-31 gap-[8px]">
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/images/iconessentialadd1.svg"
              />
              <a className="[text-decoration:none] relative text-sm leading-[18px] font-text-text-sm-font-normal text-text-default text-left inline-block min-w-[71px]">
                View More
              </a>
              <img
                className="h-5 w-5 relative hidden"
                alt=""
                src="/images/iconarrowarrowright1.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[12px] text-lg">
        <div className="relative leading-[22px]">{noOfTotalRequests}</div>
        <div className="flex flex-row items-center justify-start gap-[12px] text-11xl text-text-title">
          <div className="relative leading-[34px] font-semibold inline-block min-w-[59px] mq850:text-5xl mq850:leading-[27px] mq450:text-lg mq450:leading-[20px]">
            {currency}
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px] text-xl text-text-default">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[24px] inline-block min-w-[25px] mq450:text-base mq450:leading-[19px]">
                {trendValue}
              </div>
              <img
                className="h-8 w-8 relative"
                loading="lazy"
                alt=""
                src="/images/iconarrowarrowup.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-end text-right text-sm text-interface-text-subtitle">
              <div className="relative leading-[18px] inline-block min-w-[90px]">
                by last month
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-sm">
        <div className="grid grid-cols-2  flex justify-start gap-[12px_8px] min-h-[172px] w-full">
          <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[18px] inline-block min-w-[120px]">
              {pendingRequests}
            </div>
            <div className="relative text-lg leading-[22px] font-medium text-text-title inline-block min-w-[26px]">
              {requestAmount}
            </div>
          </div>
          <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[18px] inline-block min-w-[124px]">
              {rejectedRequests}
            </div>
            <div className="relative text-lg leading-[22px] font-medium text-text-title inline-block min-w-[32px]">
              {usedAmount}
            </div>
          </div>
          <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[18px]">{approvedRequests}</div>
            <div className="relative text-lg leading-[22px] font-medium text-text-title inline-block min-w-[22px]">
              {availableAmount}
            </div>
          </div>
          <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative leading-[18px]">
              {actionPendingRequests}
            </div>
            <div className="relative text-lg leading-[22px] font-medium text-text-title inline-block min-w-[23px]">
              {averageAmount}
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-row items-center justify-start py-0 pr-[60px] pl-0 box-border gap-[24px] max-w-full text-lg text-black mq850:flex-wrap mq850:p-5 mq850:box-border">
          <button className="cursor-pointer [border:none] py-3.5 px-spacing-5 bg-colors-primary-400 rounded-border-radius-rounded flex flex-row items-center justify-start gap-[4px] hover:bg-brown">
            <img
              className="h-4 w-4 relative min-h-[16px]"
              alt=""
              src="/images/iconessentialdanger.svg"
            />
            <div className="relative text-xs leading-[16px] uppercase font-medium font-text-text-sm-font-normal text-surface-component text-left inline-block min-w-[38px]">
              Alert
            </div>
          </button>
          <div className="flex-1 flex flex-row items-center justify-start gap-[36px] min-w-[222px] max-w-full mq450:flex-wrap mq450:gap-[18px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[22px] font-medium inline-block min-w-[23px]">
                  23
                </div>
              </div>
              <div className="relative text-sm leading-[18px] text-text-default inline-block min-w-[120px]">
                {pendingRequests1}
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[22px] font-medium inline-block min-w-[23px]">
                  23
                </div>
              </div>
              <div className="relative text-sm leading-[18px] text-text-default inline-block min-w-[124px]">
                {rejectedRequests1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BudgetCards.propTypes = {
  className: PropTypes.string,
  requestsCAPEXEACE: PropTypes.string,
  noOfTotalRequests: PropTypes.string,
  currency: PropTypes.string,
  trendValue: PropTypes.string,
  pendingRequests: PropTypes.string,
  requestAmount: PropTypes.string,
  rejectedRequests: PropTypes.string,
  usedAmount: PropTypes.string,
  approvedRequests: PropTypes.string,
  availableAmount: PropTypes.string,
  actionPendingRequests: PropTypes.string,
  averageAmount: PropTypes.string,
  pendingRequests1: PropTypes.string,
  rejectedRequests1: PropTypes.string,
};

export default BudgetCards;
