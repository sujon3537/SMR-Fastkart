import React, { useContext, useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import TopbarLeft from "./TopbarLeft";
import TopbarSlider from "./TopbarSlider";
import TopLanguage from "./TopLanguage";
import HeaderCurrency from "./HeaderCurrency";
import FooterSocial from "@/layout/footer/widgets/FooterSocial";
import ThemeOptionContext from "@/helper/themeOptionsContext";
import { usePathname } from "next/navigation";
import I18NextContext from "@/helper/i18NextContext";

const HeaderTopBar = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const addClass = useRef(null);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName == `/${i18Lang}/theme/tokyo`) {
      addClass.current?.classList.add("bg-dark");
    }

    return () => {
      addClass.current?.classList.remove("bg-dark");
    };
  }, [i18Lang, pathName]);
  return (
    <div
      className={`header-top${
        themeOption?.header?.page_top_bar_dark ? " bg-dark" : ""
      }`}
      ref={addClass}
    >
      <div className="container-fluid-lg">
        <Row>
          <TopbarLeft />
          <TopbarSlider />
          <Col lg={3}>
            <ul className="about-list right-nav-about">
              <li className="right-nav-list">
                <TopLanguage />
              </li>
              <li className="right-nav-list">
                <HeaderCurrency />
              </li>
              {/* <li className='right-nav-list'>
                <FooterSocial />
              </li> */}
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default HeaderTopBar;
