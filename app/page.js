import React from 'react'
import Navigation1 from "../components/navigation1";
import BudgetCards from "../components/budget-cards";

export default function page() {
  return (
    <div>
       <div className="w-full relative bg-interface-surface-page flex flex-row items-start justify-start py-0 pr-10 pl-0 box-border gap-[40px] leading-[normal] tracking-[normal] mq850:gap-[20px] mq1525:flex-wrap mq1525:p-5 mq1525:box-border">
      <img
        className="w-[1889.6px] relative max-h-full hidden max-w-full"
        alt=""
        src="/images/group-289492.svg"
      />
      <div className="h-[1080px] w-[680px] relative bg-colors-neutral-950 overflow-hidden shrink-0 min-w-[680px] max-w-full mq850:min-w-full mq1525:flex-1">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-360px] max-h-full w-[1620px] object-cover"
          alt=""
          src="/images/image-23@2x.png"
        />
        <Navigation1 />
      </div>
      <section className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[754px] max-w-full text-left text-5xl text-text-title font-text-text-sm-font-normal mq850:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq850:gap-[16px]">
          <div className="self-stretch box-border flex flex-row items-center justify-between pt-0 px-0 pb-3.5 gap-[20px] max-w-full border-b-[1px] border-solid border-interface-stroke-default mq850:flex-wrap">
            <h2 className="m-0 relative text-inherit leading-[28px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[22px]">
              Quick Facts and Alerts Pages
            </h2>
            <div className="w-[119px] rounded overflow-hidden shrink-0 flex flex-col items-start justify-start text-[10px] text-interface-text-subtitle1 font-work-sans">
              <div className="self-stretch bg-surface-component overflow-hidden flex flex-row items-end justify-start pt-2 px-3 pb-0">
                <div className="relative leading-[100%] inline-block min-w-[21px]">
                  Year
                </div>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-surface-component self-stretch h-7 flex flex-row items-center justify-start pt-[5px] px-3 pb-2 box-border font-work-sans text-sm text-darkslategray min-w-[71px]"
                placeholder="2023-2024"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq1225:flex-wrap">
              <BudgetCards
                requestsCAPEXEACE="Requests - CAPEX EACE"
                noOfTotalRequests="No. of Total Requests"
                currency="345"
                trendValue="45"
                pendingRequests="Pending Requests"
                requestAmount="111"
                rejectedRequests="Rejected Requests"
                usedAmount="123"
                approvedRequests="Approved Requests"
                availableAmount="87"
                actionPendingRequests="Action Pending Requests"
                averageAmount="56"
                pendingRequests1="Pending Requests"
                rejectedRequests1="Rejected Requests"
              />
              <BudgetCards
                requestsCAPEXEACE="Requests - NDF		"
                noOfTotalRequests="No. of Total Requests"
                currency="104"
                trendValue="34"
                pendingRequests="Pending Requests"
                requestAmount="34"
                rejectedRequests="Rejected Requests"
                usedAmount="34"
                approvedRequests="Approved Requests"
                availableAmount="26"
                actionPendingRequests="Action Pending Requests"
                averageAmount="34"
                pendingRequests1="Pending Requests"
                rejectedRequests1="Rejected Requests"
              />
            </div>
            <form className="m-0 self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq1225:flex-wrap">
              <div className="flex-1 rounded-border-radius-rounded-xl bg-surface-component overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-8 box-border gap-[24px] max-w-full mq450:pt-5 mq450:pb-[21px] mq450:box-border">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="w-[98px] flex flex-col items-start justify-start gap-[8px]">
                    <h2 className="m-0 w-24 relative text-5xl leading-[28px] font-semibold font-text-text-sm-font-normal text-text-title text-left inline-block mq450:text-lgi mq450:leading-[22px]">
                      Budget{" "}
                    </h2>
                    <div className="self-stretch h-1.5 relative rounded-border-radius-rounded-xl bg-colors-highlight-500" />
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
                <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
                  <div className="relative text-lg leading-[22px] font-text-text-sm-font-normal text-text-default text-left">
                    Overall Budget Summary
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[12px] mq850:flex-wrap">
                    <div className="relative text-11xl leading-[34px] font-semibold font-text-text-sm-font-normal text-text-title text-left mq850:text-5xl mq850:leading-[27px] mq450:text-lg mq450:leading-[20px]">
                      OMR 5,200.234
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <div className="relative text-xl leading-[24px] font-text-text-sm-font-normal text-text-default text-left inline-block min-w-[52px] mq450:text-base mq450:leading-[19px]">
                          37.50
                        </div>
                        <img
                          className="h-8 w-8 relative"
                          loading="lazy"
                          alt=""
                          src="/images/iconarrowarrowup.svg"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-end">
                        <div className="relative text-sm leading-[18px] font-text-text-sm-font-normal text-interface-text-subtitle text-right inline-block min-w-[90px]">
                          by last month
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="grid grid-cols-2 flex items-start justify-start gap-[12px_8px] min-h-[172px]">
                    <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px]">
                      <div className="relative text-sm leading-[18px] font-text-text-sm-font-normal text-text-default text-left">
                        Current Requested Budget
                      </div>
                      <div className="relative text-lg leading-[22px] font-medium font-text-text-sm-font-normal text-text-title text-left">
                        OMR 1,200.234
                      </div>
                    </div>
                    <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[18px] font-text-text-sm-font-normal text-text-default text-left inline-block min-w-[87px]">
                        Used Budget
                      </div>
                      <div className="relative text-lg leading-[22px] font-medium font-text-text-sm-font-normal text-text-title text-left">
                        OMR 1,200.234
                      </div>
                    </div>
                    <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 gap-[8px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[18px] font-text-text-sm-font-normal text-text-default text-left inline-block min-w-[111px]">
                        Available Budget
                      </div>
                      <div className="relative text-lg leading-[22px] font-medium font-text-text-sm-font-normal text-text-title text-left">
                        OMR 1,200.234
                      </div>
                    </div>
                    <div className="rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-col items-center justify-center py-spacing-4 px-[27px] gap-[8px]">
                      <div className="relative text-sm leading-[18px] font-text-text-sm-font-normal text-text-default text-left">
                        Monthly Avg. Available Budget
                      </div>
                      <div className="relative text-lg leading-[22px] font-medium font-text-text-sm-font-normal text-text-title text-left">
                        OMR 1,200.234
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-border-radius-rounded-lg bg-surface-component-muted flex flex-row items-center justify-start py-0 pr-[260px] pl-0 gap-[24px] mq850:pr-[130px] mq850:box-border mq450:flex-wrap mq450:p-5 mq450:box-border">
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
                    <div className="flex flex-row items-center justify-start">
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative text-lg leading-[22px] font-medium font-text-text-sm-font-normal text-black text-left inline-block min-w-[23px]">
                            23
                          </div>
                        </div>
                        <div className="relative text-sm leading-[18px] font-text-text-sm-font-normal text-text-default text-left inline-block min-w-[111px]">
                          Available Budget
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BudgetCards
                requestsCAPEXEACE="Service Level Agreements 		"
                noOfTotalRequests="SLAs - Breached by Users"
                currency="104"
                trendValue="34"
                pendingRequests="Breached by 0-30 Days"
                requestAmount="34"
                rejectedRequests={`Breached by <30 Days`}
                usedAmount="34"
                approvedRequests="About to Breach by 0-30 Days"
                availableAmount="26"
                actionPendingRequests={`About to Breach by <30 Days`}
                averageAmount="34"
                pendingRequests1="SLAs Breached"
                rejectedRequests1="SLAs About to be Breached"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
