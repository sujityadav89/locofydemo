import { useCallback } from "react";
import TopNavigationContainer from "../../components/top-navigation-container";
import MetricsOverview from "../../components/metrics-overview";
import SubjectArea from "../../components/subject-area";
import NewsContent from "../../components/news-content";

export default function page() {
  // const onFrameContainerClick = useCallback(() => {
  //   const anchor = document.querySelector(
  //     "[data-scroll-to='subjectAreaContainer']"
  //   );
  //   if (anchor) {
  //     anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  //   }
  // }, []);
  return (
    <div>
        <div className="w-full h-[1080px] relative rounded-lg bg-interface-surface-component overflow-y-auto flex flex-col items-end justify-start gap-[56px] leading-[normal] tracking-[normal] text-left text-sm text-interface-text-default2 font-open-sans mq825:h-auto mq825:gap-[28px]">
      <img
        className="w-full h-[550px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/images/bg.svg"
      />
      <div className="self-stretch h-[465px] relative bg-interface-surface-component overflow-hidden shrink-0 hidden z-[1]" />
      <TopNavigationContainer />
      <main className="self-stretch flex flex-row items-start justify-end pt-0 pb-[101px] pr-[41px] pl-10 box-border max-w-full shrink-0 lg:pb-[66px] lg:box-border mq825:pb-[43px] mq825:box-border">
        <section className="h-[871px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[154px] box-border gap-[30px] shrink-0 max-w-full text-left text-11xl text-interface-surface-component font-leading-none-text-sm-font-normal lg:pb-[100px] lg:box-border mq825:h-auto mq450:pb-[65px] mq450:box-border">
          <div className="w-[843px] flex flex-row items-start justify-start pt-0 px-10 pb-[19px] box-border max-w-full shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] shrink-0 max-w-full">
              <h1 className="m-0 relative text-inherit leading-[34px] inline-block max-w-full z-[1] font-inherit mq825:text-5xl mq825:leading-[27px] mq450:text-lg mq450:leading-[20px]">
                <span>{`Welcome to `}</span>
                <b>MultiPlan</b>
                <span> Analytics Portal</span>
              </h1>
              <div className="self-stretch h-[71px] relative text-base tracking-[-0.02em] leading-[20px] flex items-center z-[1] text-interface-text-subtitle3 font-segoe-ui">
                <span>
                  <span>{`MultiPlan uses technology-enabled provider network, negotiation, claim pricing and payment accuracy services as building blocks for medical payors to customize the healthcare cost management programs that work best for them. `}</span>
                  <span className="font-semibold text-interface-surface-component">
                    We believe there is no such thing as a standard cost
                    management approach.
                  </span>
                  <span>
                    {" "}
                    Used standalone or in any combination, our services improve
                    both performance and competitive advantage for our clients.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <MetricsOverview />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[39px] pl-10 box-border max-w-full shrink-0 text-sm text-interface-text-title2">
            <div className="flex-1 flex flex-col items-start justify-start gap-[23px] shrink-0 max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq825:flex-wrap">
                <div className="relative leading-[18px] font-semibold inline-block min-w-[59px]">
                  Modules
                </div>
                <div className="w-[362px] flex flex-row items-center justify-end gap-[32px] max-w-full text-gray-900 mq450:flex-wrap mq450:gap-[16px]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[157px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch h-[21px] relative leading-[150%] font-medium hidden">
                        First name
                      </div>
                      <div className="self-stretch rounded-lg bg-interface-surface-component-muted flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-interface-stroke-default1">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                            alt=""
                            src="/images/searchoutline1.svg"
                          />
                          <input
                            className="w-[calc(100%_-_28px)] [border:none] [outline:none] font-leading-none-text-sm-font-normal text-sm bg-[transparent] h-4 flex-1 relative leading-[16px] text-interface-text-subtitle3 text-left flex items-center min-w-[67px] p-0"
                            placeholder="Search"
                            type="text"
                          />
                          <img
                            className="h-3 w-3 relative overflow-hidden shrink-0"
                            alt=""
                            src="/images/x1.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch h-5 relative leading-[20px] hidden text-interface-text-subtitle2">
                        <span>{`We’ll never share your details. See our `}</span>
                        <span className="text-interface-text-default2">
                          Privacy Policy.
                        </span>
                      </div>
                    </div>
                    <div className="w-10 rounded-lg bg-interface-surface-hc-primary box-border flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-interface-surface-hc-primary">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/images/searchoutline-1.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-end gap-[8px]">
                    <div
                      className="w-10 rounded-border-radius-rounded-md1 bg-interface-surface-component box-border flex flex-row items-center justify-center py-2 px-[9px] cursor-pointer border-[1px] border-solid border-interface-stroke-default1"
                      // onClick={onFrameContainerClick}
                    >
                      <img
                        className="h-5 w-5 relative"
                        loading="lazy"
                        alt=""
                        src="/images/iconarrowarrowleft1.svg"
                      />
                    </div>
                    <div className="w-10 rounded-border-radius-rounded-md1 bg-interface-surface-component box-border flex flex-row items-center justify-center py-2 px-[9px] border-[1px] border-solid border-interface-stroke-default1">
                      <img
                        className="h-5 w-5 relative"
                        loading="lazy"
                        alt=""
                        src="/images/iconarrowarrowright4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1760px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full">
                <SubjectArea
                  businesswomanUsingTabletA="/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1@2x.png"
                  title="Claims Dashboard"
                />
                <SubjectArea
                  businesswomanUsingTabletA="/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-1@2x.png"
                  title="FNX CCF Operations"
                  propFlexDirection="row"
                />
                <SubjectArea
                  businesswomanUsingTabletA="/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-2@2x.png"
                  title="Triage Reports"
                  propFlexDirection="row"
                />
                <SubjectArea
                  businesswomanUsingTabletA="/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-3@2x.png"
                  title="Claim Operations"
                  propFlexDirection="column"
                />
                <div className="h-[170px] w-[422px] relative rounded-border-radius-rounded-lg3 bg-interface-surface-component overflow-hidden shrink-0 hidden max-w-full">
                  <img
                    className="absolute top-[-15px] left-[calc(50%_-_211px)] w-[422px] h-[261px] object-cover"
                    alt=""
                    src="/images/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-4@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[123px]"
                    alt=""
                    src="/images/rectangle-4566.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[93px]"
                    alt=""
                    src="/images/rectangle-4568.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[63px]"
                    alt=""
                    src="/images/rectangle-4567.svg"
                  />
                  <div className="absolute bottom-[0px] left-[0px] bg-gray1-400 w-[422px] h-10 flex flex-row items-end justify-start py-spacing-253 px-spacing-42 box-border whitespace-nowrap">
                    <div className="relative leading-[18px] font-semibold">{`Sales & Marketing`}</div>
                  </div>
                </div>
                <div className="h-[170px] w-[422px] relative rounded-border-radius-rounded-lg3 bg-interface-surface-component overflow-hidden shrink-0 hidden max-w-full">
                  <img
                    className="absolute top-[-15px] left-[calc(50%_-_211px)] w-[422px] h-[261px] object-cover"
                    alt=""
                    src="/images/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-5@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[123px]"
                    alt=""
                    src="/images/rectangle-4566.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[93px]"
                    alt=""
                    src="/images/rectangle-4568.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[63px]"
                    alt=""
                    src="/images/rectangle-4567.svg"
                  />
                  <div className="absolute bottom-[0px] left-[0px] bg-gray1-400 w-[422px] h-10 flex flex-row items-end justify-start py-spacing-253 px-spacing-42 box-border whitespace-nowrap">
                    <div className="relative leading-[18px] font-semibold">
                      Surprise Billing
                    </div>
                  </div>
                </div>
                <div className="h-[170px] w-[422px] relative rounded-border-radius-rounded-lg3 bg-interface-surface-component overflow-hidden shrink-0 hidden max-w-full">
                  <img
                    className="absolute top-[-15px] left-[calc(50%_-_211px)] w-[422px] h-[261px] object-cover"
                    alt=""
                    src="/images/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-6@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[123px]"
                    alt=""
                    src="/images/rectangle-4566.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[93px]"
                    alt=""
                    src="/images/rectangle-4568.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[63px]"
                    alt=""
                    src="/images/rectangle-4567.svg"
                  />
                  <div className="absolute bottom-[0px] left-[0px] bg-gray1-400 w-[422px] h-10 flex flex-row items-end justify-start py-spacing-253 px-spacing-42 box-border whitespace-nowrap">
                    <div className="relative leading-[18px] font-semibold">{`Payment & Revenue Integrity`}</div>
                  </div>
                </div>
                <div className="h-[170px] w-[422px] relative rounded-border-radius-rounded-lg3 bg-interface-surface-component overflow-hidden shrink-0 hidden max-w-full">
                  <img
                    className="absolute top-[-15px] left-[calc(50%_-_211px)] w-[422px] h-[261px] object-cover"
                    alt=""
                    src="/images/businesswomanusingtabletanalysisgraphcompanyfinancestrategystatisticssuccessconceptplanningfutureofficeroom-1-7@2x.png"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[123px]"
                    alt=""
                    src="/images/rectangle-4566.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[93px]"
                    alt=""
                    src="/images/rectangle-4568.svg"
                  />
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[-10px] max-h-full w-[63px]"
                    alt=""
                    src="/images/rectangle-4567.svg"
                  />
                  <div className="absolute bottom-[0px] left-[0px] bg-gray1-400 w-[422px] h-10 flex flex-row items-end justify-start py-spacing-253 px-spacing-42 box-border whitespace-nowrap">
                    <div className="relative leading-[18px] font-semibold">
                      Technical Services
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-col items-start justify-start shrink-0 max-w-full">
        <NewsContent />
        <div className="self-stretch bg-interface-surface-page-muted1 overflow-hidden flex flex-row items-center justify-between py-4 px-20 box-border max-w-full gap-[20px] mq825:flex-wrap mq825:pl-10 mq825:pr-10 mq825:box-border">
          <img
            className="h-6 w-[136.9px] relative overflow-hidden shrink-0 object-contain"
            alt=""
            src="/images/multiplan-2-1@2x.png"
          />
          <div className="w-[325px] flex flex-row items-center justify-start max-w-full">
            <div className="h-5 flex-1 relative leading-[140%] inline-block max-w-full">
              © 2023 MultiPlan Corporation. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
