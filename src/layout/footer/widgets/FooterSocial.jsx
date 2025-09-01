import React, { useContext } from "react";
import ThemeOptionContext from "@/helper/themeOptionsContext";
import Link from "next/link";
import I18NextContext from "@/helper/i18NextContext";
import { useTranslation } from "@/app/i18n/client";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiPinterestLine,
  RiTwitterFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiTiktokFill,
} from "react-icons/ri";
import { BsThreadsFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";

const FooterSocial = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const isFooterSocial =
    themeOption?.footer?.social_media_enable ||
    themeOption?.footer?.facebook ||
    themeOption?.footer?.twitter ||
    themeOption?.footer?.instagram ||
    themeOption?.footer?.pinterest;
  return (
    <>
      {isFooterSocial ? (
        <div className="social-link">
          <h6 className="text-content">{t("StayConnected")} :</h6>
          <ul>
            {themeOption?.footer?.facebook && (
              <li>
                <Link href={themeOption?.footer?.facebook} target="_blank">
                  <RiFacebookFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.facebook_group && (
              <li>
                <Link
                  href={themeOption?.footer?.facebook_group}
                  target="_blank"
                >
                  <MdGroups />
                </Link>
              </li>
            )}
            {themeOption?.footer?.instagram && (
              <li>
                <Link href={themeOption?.footer?.instagram} target="_blank">
                  <RiInstagramLine />
                </Link>
              </li>
            )}
            {themeOption?.footer?.youtube && (
              <li>
                <Link href={themeOption?.footer?.youtube} target="_blank">
                  <RiYoutubeFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.linkedin && (
              <li>
                <Link href={themeOption?.footer?.linkedin} target="_blank">
                  <RiLinkedinBoxFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.pinterest && (
              <li>
                <Link href={themeOption?.footer?.pinterest} target="_blank">
                  <RiPinterestLine />
                </Link>
              </li>
            )}
            {themeOption?.footer?.twitter && (
              <li>
                <Link href={themeOption?.footer?.twitter} target="_blank">
                  <RiTwitterFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.threads && (
              <li>
                <Link href={themeOption?.footer?.threads} target="_blank">
                  <BsThreadsFill />
                </Link>
              </li>
            )}
            {themeOption?.footer?.tiktok && (
              <li>
                <Link href={themeOption?.footer?.tiktok} target="_blank">
                  <RiTiktokFill />
                </Link>
              </li>
            )}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FooterSocial;
