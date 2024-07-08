import ChartContent from "./chart-content";
import PropTypes from "prop-types";

const MetricsOverview = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch rounded-border-radius-rounded-3xl1 bg-interface-surface-component overflow-hidden grid flex-row items-start justify-start py-[45px] pr-[39px] pl-10 box-border gap-[24px] shrink-0 max-w-full grid-cols-[repeat(4,_minmax(316px,_1fr))] z-[1] text-left text-xs text-interface-text-title2 font-leading-none-text-sm-font-normal mq825:pt-[29px] mq825:pb-[29px] mq825:box-border mq825:grid-cols-[minmax(316px,_1fr)] mq1450:justify-center mq1450:grid-cols-[repeat(2,_minmax(316px,_549px))] ${className}`}
    >
      <div className="shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_10px_10px_rgba(0,_0,_0,_0.04)] rounded-2xl bg-interface-surface-component box-border overflow-hidden flex flex-col items-start justify-start pt-5 pb-3 pr-[21px] pl-[23px] relative gap-[21px] max-w-full border-[1px] border-solid border-interface-stroke-soft2">
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full text-xl mq825:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border relative gap-[8px] min-w-[218px] max-w-full">
            <h2 className="m-0 w-[283px] relative text-inherit leading-[24px] font-semibold font-inherit flex items-center mq450:text-base mq450:leading-[19px]">
              Total No. of Claims
            </h2>
            <div className="w-10 h-1 absolute !m-[0] bottom-[0px] left-[0px] rounded-11xl bg-brand-support-2-pure" />
          </div>
          <img
            className="h-6 w-6 relative"
            loading="lazy"
            alt=""
           src="/images/iconessentialmorecircle.svg"
          />
        </div>
        <img
          className="w-full h-[204px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
          alt=""
         src="/images/paid-claims-metric.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[19.5px] text-sm text-interface-text-default2 mq825:flex-wrap">
          <ChartContent
            actual="Actual"
            prop="1810"
            changeIndicator="4.90%"
            iconArrowarrowUp="/images/iconarrowarrowup1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[108px] text-interface-text-title2">
            <div className="flex flex-row items-end justify-start">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[19px]">
                <div className="w-[35px] h-px relative box-border border-t-[1px] border-solid border-interface-stroke-soft2" />
              </div>
              <div className="h-10 w-10 rounded-border-radius-rounded-full2 bg-interface-surface-component-muted flex flex-row items-start justify-start py-[11px] px-2.5 box-border">
                <div className="relative leading-[18px] inline-block min-w-[19px]">
                  VS
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[19px]">
                <div className="w-[35px] h-px relative box-border border-t-[1px] border-solid border-interface-stroke-soft2" />
              </div>
            </div>
          </div>
          <ChartContent
            actual="Target"
            prop="2145"
            changeIndicator="10.15%"
            iconArrowarrowUp="/images/iconarrowarrowdown1.svg"
            propFlex="1"
            propMinWidth="85px"
          />
        </div>
        <div className="w-[365px] flex flex-col items-start justify-start pt-0 px-0 pb-[62px] box-border gap-[20px] max-w-full text-interface-text-default2 font-segoe-ui">
          <div className="w-[247px] flex flex-row items-start justify-start gap-[16px]">
            <div className="h-2 flex-1 flex flex-row items-start justify-start gap-[6px]">
              <div className="h-[9px] w-[9px] relative rounded-xl bg-interface-surface-hc-primary box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[65px]">
                Current Year
              </div>
            </div>
            <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
              <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-700 box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[47px]">
                Last Year
              </div>
            </div>
            <div className="h-2 flex-1 flex flex-row items-start justify-start gap-[6px]">
              <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-2-pure box-border border-[1px] border-solid border-interface-surface-component" />
              <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[61px]">
                Avg. Claims
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full text-center text-interface-text-title2 font-leading-none-text-sm-font-normal">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq825:flex-wrap">
              <div className="w-[30px] relative leading-[16px] uppercase font-medium flex items-center justify-center shrink-0">
                254
              </div>
              <div className="w-[30px] relative leading-[16px] uppercase font-medium flex items-center justify-center shrink-0">
                325
              </div>
              <div className="w-[30px] relative leading-[16px] uppercase font-medium flex items-center justify-center shrink-0">
                322
              </div>
              <div className="w-[30px] relative leading-[16px] uppercase font-medium flex items-center justify-center shrink-0">
                218
              </div>
              <div className="w-[30px] relative leading-[16px] uppercase font-medium flex items-center justify-center shrink-0">
                197
              </div>
              <div className="w-[30px] relative leading-[16px] uppercase font-medium flex items-center justify-center shrink-0">
                494
              </div>
            </div>
            <div className="self-stretch h-[105px] flex flex-row items-start justify-start py-0 pr-[7px] pl-1.5 box-border max-w-full">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[186px] w-[calc(100%_-_14px)] absolute !m-[0] right-[7px] bottom-[-81px] left-[7px] max-w-full overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                 src="/images/images/group-289391.svg"
                />
                <div className="h-[105px] flex-1 relative max-w-full z-[2] flex items-center justify-center">
                  <img
                    className="h-full flex-1 overflow-hidden z-[2] object-contain absolute left-[0px] top-[2px] w-full [transform:scale(1.229)]"
                    alt=""
                   src="/images/images/group-289473.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[365px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] text-center mq825:flex-wrap">
          <div className="w-[30px] relative leading-[16px] font-medium flex items-center justify-center shrink-0">
            Nov
          </div>
          <div className="w-[30px] relative leading-[16px] font-medium flex items-center justify-center shrink-0">
            Oct
          </div>
          <div className="w-[30px] relative leading-[16px] font-medium flex items-center justify-center shrink-0">
            Sep
          </div>
          <div className="w-[30px] relative leading-[16px] font-medium flex items-center justify-center shrink-0">
            Aug
          </div>
          <div className="w-[30px] relative leading-[16px] font-medium flex items-center justify-center shrink-0">
            Jul
          </div>
          <div className="w-[30px] relative leading-[16px] font-medium flex items-center justify-center shrink-0">
            Jun
          </div>
        </div>
      </div>
      <div className="shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_10px_10px_rgba(0,_0,_0,_0.04)] rounded-2xl bg-interface-surface-component box-border overflow-hidden flex flex-col items-start justify-start pt-5 pb-3 pr-[21px] pl-[22px] relative gap-[27px] max-w-full border-[1px] border-solid border-interface-stroke-soft2">
        <img
          className="w-full h-[145px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
          alt=""
         src="/images/vector-364-1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-xl">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq825:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border relative gap-[8px] min-w-[218px] max-w-full">
                <h2 className="m-0 w-[283px] relative text-inherit leading-[24px] font-semibold font-inherit flex items-center mq450:text-base mq450:leading-[19px]">
                  Claims Incurred
                </h2>
                <div className="w-10 h-1 absolute !m-[0] bottom-[0px] left-[0px] rounded-11xl bg-brand-support-2-pure" />
              </div>
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
               src="/images/iconessentialmorecircle.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px box-border max-w-full text-center text-interface-text-subtitle3">
            <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] mq825:flex-wrap">
              <ChartContent
                actual="Paid"
                prop="$7.75M"
                changeIndicator="3.90%"
                iconArrowarrowUp="/images/iconarrowarrowup1.svg"
                propFlex="unset"
                propMinWidth="unset"
              />
              <div className="w-[79px] rounded-border-radius-rounded-md1 bg-interface-surface-component-muted flex flex-col items-center justify-center py-4 px-spacing-152 box-border gap-[6px]">
                <div className="self-stretch relative leading-[18px]">
                  Claims Incurred
                </div>
                <div className="relative text-sm leading-[18px] font-medium text-interface-text-title2 text-left inline-block min-w-[52px]">
                  $243.M
                </div>
              </div>
              <ChartContent
                actual="Outsanding"
                prop="$6.31M"
                changeIndicator="1.15%"
                iconArrowarrowUp="/images/iconarrowarrowdown1.svg"
                propFlex="unset"
                propMinWidth="unset"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-px text-interface-text-default2 font-segoe-ui">
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-700 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[23px]">
                  Paid
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-2-pure box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[66px]">
                  Outstanding
                </div>
              </div>
            </div>
          </div>
          <div className="w-[367px] flex flex-row items-start justify-between max-w-full gap-[20px] text-center mq825:flex-wrap">
            <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[36px]">
              $1.1M
            </div>
            <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[36px]">
              $1.2M
            </div>
            <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[36px]">
              $1.3M
            </div>
            <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[36px]">
              $1.4M
            </div>
            <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[36px]">
              $1.5M
            </div>
            <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[36px]">
              $1.6M
            </div>
          </div>
        </div>
        <div className="w-[367px] flex flex-col items-start justify-start gap-[2px] max-w-full text-center">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[181px] w-[370px] absolute !m-[0] top-[-17px] right-[-4px] object-contain z-[1]"
              loading="lazy"
              alt=""
             src="/images/group-289391-1@2x.png"
            />
            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] z-[2] mq825:flex-wrap">
              <div className="h-[156px] flex flex-row items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-1-700" />
                </div>
                <div className="h-[123px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-2-pure" />
                </div>
              </div>
              <div className="h-36 flex flex-row items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-1-700" />
                </div>
                <div className="h-[124px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-2-pure" />
                </div>
              </div>
              <div className="h-[164px] flex flex-row items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-1-700" />
                </div>
                <div className="h-[140px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-2-pure" />
                </div>
              </div>
              <div className="h-[126px] flex flex-row items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-1-700" />
                </div>
                <div className="h-[95px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-2-pure" />
                </div>
              </div>
              <div className="h-[141px] flex flex-row items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-1-700" />
                </div>
                <div className="h-[121px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-2-pure" />
                </div>
              </div>
              <div className="h-[147px] flex flex-row items-end justify-start">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-1-700" />
                </div>
                <div className="h-[123px] flex flex-row items-start justify-start">
                  <div className="self-stretch w-4 relative rounded-t-sm rounded-b-none bg-brand-support-2-pure" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq825:flex-wrap">
              <div className="w-8 relative leading-[16px] font-medium flex items-center justify-center shrink-0">
                Nov
              </div>
              <div className="w-8 relative leading-[16px] font-medium flex items-center justify-center shrink-0">
                Oct
              </div>
              <div className="w-8 relative leading-[16px] font-medium flex items-center justify-center shrink-0">
                Sep
              </div>
              <div className="w-8 relative leading-[16px] font-medium flex items-center justify-center shrink-0">
                Aug
              </div>
              <div className="w-8 relative leading-[16px] font-medium flex items-center justify-center shrink-0">
                Jul
              </div>
              <div className="w-8 relative leading-[16px] font-medium flex items-center justify-center shrink-0">
                Jun
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_10px_10px_rgba(0,_0,_0,_0.04)] rounded-2xl bg-interface-surface-component box-border overflow-hidden flex flex-col items-start justify-start py-5 pr-[19px] pl-[21px] gap-[22px] max-w-full text-xl border-[1px] border-solid border-interface-stroke-soft2">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border relative gap-[8px] min-w-[218px] max-w-full">
              <h2 className="m-0 w-[283px] relative text-inherit leading-[24px] font-semibold font-inherit flex items-center mq450:text-base mq450:leading-[19px]">
                Claims Ratio
              </h2>
              <div className="w-10 h-1 absolute !m-[0] bottom-[0px] left-[0px] rounded-11xl bg-brand-support-2-pure" />
            </div>
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
             src="/images/iconessentialmorecircle.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-xs text-interface-text-default2">
          <div className="w-[369px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq825:flex-wrap">
              <ChartContent
                actual="Paid"
                prop="53%"
                changeIndicator="3.90%"
                iconArrowarrowUp="/iconarrowarrowup1.svg"
                propFlex="unset"
                propMinWidth="unset"
              />
              <div className="flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
                <img
                  className="h-[92px] w-[92px] relative"
                  loading="lazy"
                  alt=""
                 src="/images/group-289474.svg"
                />
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[16px] font-medium inline-block min-w-[73px]">
                      Risk Division
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[16px] font-segoe-ui">
                      <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                        <div className="h-[9px] w-[9px] relative rounded-xl bg-interface-surface-hc-primary box-border border-[1px] border-solid border-interface-surface-component" />
                        <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[22px]">
                          Low
                        </div>
                      </div>
                      <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                        <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-primary-5001 box-border border-[1px] border-solid border-interface-surface-component" />
                        <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[45px]">
                          Medium
                        </div>
                      </div>
                      <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                        <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-primary-8001 box-border border-[1px] border-solid border-interface-surface-component" />
                        <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[26px]">
                          High
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-interface-text-title2 mq825:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[117px]">
              <div className="relative leading-[16px] font-medium inline-block min-w-[85px]">
                CCC Per Claim
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-center text-2xs text-interface-text-default2">
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <input
                    className="w-[91px] [border:none] [outline:none] font-leading-none-text-sm-font-normal text-2xs bg-[transparent] h-[11px] relative tracking-[-0.02em] leading-[100%] text-interface-text-default2 text-center flex items-center justify-center p-0"
                    placeholder="Medical Expenses"
                    type="text"
                  />
                  <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[107px] h-[21px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-brand-primary-600 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <div className="relative tracking-[-0.02em] leading-[100%]">
                    Loss Adjustment Expenses
                  </div>
                  <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[126px] h-[21px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-brand-primary-600 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <div className="w-[157px] relative tracking-[-0.02em] leading-[100%] flex items-center justify-center">
                    Deductables and Co-Payments
                  </div>
                  <div className="self-stretch rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[101px] h-[21px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-brand-primary-600 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <div className="relative tracking-[-0.02em] leading-[100%]">{`Overhead & Operational Cost`}</div>
                  <div className="self-stretch rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[136px] h-[21px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-brand-primary-600 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[117px]">
              <div className="relative leading-[16px] font-medium">
                Top Quantity By Category
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <input
                    className="w-[62px] [border:none] [outline:none] font-leading-none-text-sm-font-normal text-2xs bg-[transparent] h-[11px] relative tracking-[-0.02em] leading-[100%] text-interface-text-default2 text-center flex items-center justify-center p-0"
                    placeholder="Unclassified"
                    type="text"
                  />
                  <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[107px] h-[21px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-brand-support-1-700 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <input
                    className="w-[38px] [border:none] [outline:none] font-leading-none-text-sm-font-normal text-2xs bg-[transparent] h-[11px] relative tracking-[-0.02em] leading-[100%] text-interface-text-default2 text-center flex items-center justify-center p-0"
                    placeholder="Service"
                    type="text"
                  />
                  <div className="self-stretch rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[107px] h-[21px] rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-brand-support-1-700 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <input
                    className="w-4 [border:none] [outline:none] font-leading-none-text-sm-font-normal text-2xs bg-[transparent] h-[11px] relative tracking-[-0.02em] leading-[100%] text-interface-text-default2 text-center flex items-center justify-center p-0"
                    placeholder="QA"
                    type="text"
                  />
                  <div className="self-stretch rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[107px] h-[21px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-brand-support-1-700 overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
                  <input
                    className="w-[52px] [border:none] [outline:none] font-leading-none-text-sm-font-normal text-2xs bg-[transparent] h-[11px] relative tracking-[-0.02em] leading-[100%] text-interface-text-default2 text-center flex items-center justify-center p-0"
                    placeholder="Claim Ops"
                    type="text"
                  />
                  <div className="self-stretch rounded-tl-none rounded-tr-sm rounded-br-sm rounded-bl-none bg-interface-surface-component-muted overflow-hidden flex flex-col items-start justify-center">
                    <div className="w-[107px] h-[21px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-brand-support-1-700 overflow-hidden shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_10px_10px_rgba(0,_0,_0,_0.04)] rounded-2xl bg-interface-surface-component box-border overflow-hidden flex flex-col items-start justify-start pt-5 px-[21px] pb-6 gap-[26.5px] max-w-full text-xl border-[1px] border-solid border-interface-stroke-soft2 mq450:pt-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq825:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border relative gap-[8px] min-w-[218px] max-w-full">
                <h2 className="m-0 w-[283px] relative text-inherit leading-[24px] font-semibold font-inherit flex items-center mq450:text-base mq450:leading-[19px]">
                  Average Resolution Time
                </h2>
                <div className="w-10 h-1 absolute !m-[0] bottom-[0px] left-[0px] rounded-11xl bg-brand-support-2-pure" />
              </div>
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
               src="/images/iconessentialmorecircle.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[22px] text-sm mq825:flex-wrap">
              <ChartContent
                actual="Actual Time"
                prop="8 Days"
                changeIndicator="2.50%"
                iconArrowarrowUp="/iconarrowarrowup1.svg"
                propFlex="1"
                propMinWidth="82px"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border min-w-[108px]">
                <div className="flex flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[19px]">
                    <div className="w-[35px] h-px relative box-border border-t-[1px] border-solid border-interface-stroke-soft2" />
                  </div>
                  <div className="h-10 w-10 rounded-border-radius-rounded-full2 bg-interface-surface-component-muted flex flex-row items-start justify-start py-[11px] px-2.5 box-border">
                    <div className="relative leading-[18px] inline-block min-w-[19px]">
                      VS
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[19px]">
                    <div className="w-[35px] h-px relative box-border border-t-[1px] border-solid border-interface-stroke-soft2" />
                  </div>
                </div>
              </div>
              <ChartContent
                actual="Target Time"
                prop="5 Days"
                changeIndicator="2.50%"
                iconArrowarrowUp="/iconarrowarrowdown1.svg"
                propFlex="1"
                propMinWidth="82px"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-sm text-interface-text-default2 font-open-sans mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 flex flex-row items-center justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[183px]">
                    <div className="relative tracking-[-0.02em] leading-[24px]">
                      Average Time By Claim Type
                    </div>
                    <h2 className="m-0 relative text-xl font-bold font-inherit text-interface-text-title2 inline-block min-w-[65px] mq450:text-base">
                      6 Days
                    </h2>
                  </div>
                  <div className="flex flex-col items-start justify-start text-xs">
                    <div className="relative tracking-[-0.02em] leading-[24px] inline-block min-w-[50px]">
                      Last Year
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[4px] text-base text-interface-text-title2">
                      <b className="relative tracking-[-0.02em] leading-[24px] inline-block min-w-[51px]">
                        5 Days
                      </b>
                      <div className="flex flex-row items-center justify-start gap-[2px] text-xs text-interface-feedback-error-700 font-leading-none-text-sm-font-normal">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                          loading="lazy"
                          alt=""
                         src="/images/icon--arrowtopright@2x.png"
                        />
                        <div className="relative tracking-[-0.02em] leading-[24px] font-medium inline-block min-w-[21px]">
                          -1%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full text-right text-3xs text-interface-surface-component">
                <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                  <div className="flex-1 rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-brand-support-2-pure overflow-hidden flex flex-row items-start justify-end py-0 px-1.5 box-border min-w-[86px]">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      35%
                    </div>
                  </div>
                  <div className="w-[37px] bg-brand-support-1-700 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[5px] box-border">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      10%
                    </div>
                  </div>
                  <div className="w-[76px] bg-brand-support-1-800 overflow-hidden shrink-0 flex flex-row items-start justify-end py-0 px-1.5 box-border">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      15%
                    </div>
                  </div>
                  <div className="flex-1 bg-brand-support-1-950 overflow-hidden flex flex-row items-start justify-end py-0 px-1.5 box-border min-w-[84px]">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      40%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] text-xs font-segoe-ui mq450:flex-wrap">
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-2-pure box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[36px]">
                  8 Days
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-700 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[36px]">
                  7 Days
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-800 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[36px]">
                  6 Days
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-950 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[36px]">
                  5 Days
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch rounded-lg flex flex-col items-start justify-start gap-[8px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 flex flex-row items-center justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border min-w-[192px]">
                    <div className="relative tracking-[-0.02em] leading-[24px]">
                      Average Satisfaction Score
                    </div>
                    <b className="relative text-xl inline-block text-interface-text-title2 min-w-[46px] mq450:text-base">
                      1500
                    </b>
                  </div>
                  <div className="flex flex-col items-start justify-start text-xs">
                    <div className="relative tracking-[-0.02em] leading-[24px] inline-block min-w-[50px]">
                      Last Year
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[4px] text-base text-interface-text-title2">
                      <b className="relative tracking-[-0.02em] leading-[24px] inline-block min-w-[36px]">
                        1550
                      </b>
                      <div className="flex flex-row items-center justify-start gap-[2px] text-xs text-interface-feedback-error-700 font-leading-none-text-sm-font-normal">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 object-contain"
                          alt=""
                         src="/images/icon--arrowtopright@2x.png"
                        />
                        <div className="relative tracking-[-0.02em] leading-[24px] font-medium inline-block min-w-[21px]">
                          -1%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full text-right text-3xs text-interface-surface-component">
                <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-start justify-start max-w-full [row-gap:20px] mq825:flex-wrap">
                  <div className="w-[133px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-brand-support-2-pure overflow-hidden shrink-0 flex flex-row items-start justify-end py-0 px-1.5 box-border">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      40%
                    </div>
                  </div>
                  <div className="w-[37px] bg-brand-support-2-600 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-[5px] box-border">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0">
                      8%
                    </div>
                  </div>
                  <div className="w-[76px] bg-brand-support-1-700 overflow-hidden shrink-0 flex flex-row items-start justify-end py-0 px-1.5 box-border">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      18%
                    </div>
                  </div>
                  <div className="flex-1 bg-brand-support-1-900 overflow-hidden flex flex-row items-start justify-end py-0 px-1.5 box-border min-w-[25px]">
                    <div className="w-[25px] relative tracking-[0.2px] leading-[16px] font-semibold flex items-center shrink-0 min-w-[25px]">
                      29%
                    </div>
                  </div>
                  <div className="w-8 bg-brand-support-1-950 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border">
                    <div className="flex-1 relative tracking-[0.2px] leading-[16px] font-semibold">
                      5%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[296px] flex flex-row items-start justify-start gap-[16px] text-xs font-segoe-ui">
              <div className="h-2 flex-1 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-2-pure box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[44px]">
                  Excelent
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-2-600 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[30px]">
                  Good
                </div>
              </div>
              <div className="h-2 flex-1 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-700 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[44px]">
                  Average
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-900 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[19px]">
                  Fair
                </div>
              </div>
              <div className="h-2 flex flex-row items-start justify-start gap-[6px]">
                <div className="h-[9px] w-[9px] relative rounded-xl bg-brand-support-1-950 box-border border-[1px] border-solid border-interface-surface-component" />
                <div className="relative leading-[8px] inline-block mix-blend-normal min-w-[25px]">
                  Poor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[38px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_rgba(0,_0,_0,_0.05)] rounded-border-radius-rounded bg-interface-surface-component hidden flex-row items-center justify-center py-spacing-253 px-spacing-42 box-border whitespace-nowrap text-sm">
        <div className="self-stretch flex-1 relative leading-[18px] font-medium flex items-center">
          Finger Tips
        </div>
      </div>
      <div className="hidden flex-row items-center justify-end gap-[8px]">
        <div className="w-10 rounded-border-radius-rounded-md1 bg-interface-surface-component box-border flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-interface-stroke-default1">
          <img
            className="h-5 w-5 relative"
            alt=""
           src="/images/iconarrowarrowleft1.svg"
          />
        </div>
        <div className="w-10 rounded-border-radius-rounded-md1 bg-interface-surface-component box-border flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-interface-stroke-default1">
          <img
            className="h-5 w-5 relative"
            alt=""
           src="/images/iconarrowarrowright4.svg"
          />
        </div>
      </div>
    </footer>
  );
};

MetricsOverview.propTypes = {
  className: PropTypes.string,
};

export default MetricsOverview;
