"use client";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  DropdownBlock,
  DropdownButton,
  FontListQueryContainer,
  FilterSection,
  SliderSection,
} from "./styles";
import { Checkbox, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { FontLicenseEnum, FontTypeEnum } from "../../types";
import { getFontLicenseLocales, getFontTypeLocales } from "@/locales";
import { BaseQueryParams } from "@/types";
import { QueryParamsActions } from "@/hooks";
import { MainSlider, PreviewTextBar } from "@/components";

type FontListQueryProps = {
  query: BaseQueryParams;
  fontTypeOpen: boolean;
  licenseOpen: boolean;
  orderByOpen: boolean;
  previewText: string;
  fontSize: number;
  handleDispatch: (action: QueryParamsActions) => void;
  handleFontTypeOpen: (state: boolean) => void;
  handleLicenseOpen: (state: boolean) => void;
  handleOrderByOpen: (state: boolean) => void;
  handlePreviewTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFontSizeChange: (value: number) => void;
};

export function FontListQuery({
  query,
  fontTypeOpen,
  licenseOpen,
  orderByOpen,
  previewText,
  fontSize,
  handleDispatch,
  handleFontTypeOpen,
  handleLicenseOpen,
  handleOrderByOpen,
  handlePreviewTextChange,
  handleFontSizeChange,
}: FontListQueryProps) {
  const { t } = useTranslation();

  const fontTypeItems: { key: string; label: string }[] = [
    FontTypeEnum.SANS_SERIF,
    FontTypeEnum.SERIF,
    FontTypeEnum.HANDWRITING,
    FontTypeEnum.DECORATIVE,
    FontTypeEnum.PIXEL,
    FontTypeEnum.TRADITIONAL_SCRIPT,
    FontTypeEnum.ROUNDED_SANS,
    FontTypeEnum.CALLIGRAPHY_FONT,
    FontTypeEnum.CODING_FONT,
    FontTypeEnum.ENGLISH,
  ]?.map((item) => ({ key: item, label: getFontTypeLocales(item) }));

  const licenseItems: { key: string; label: string }[] = [
    FontLicenseEnum.PRINT,
    FontLicenseEnum.WEBSITE,
    FontLicenseEnum.PACKAGING,
    FontLicenseEnum.VIDEO,
    FontLicenseEnum.EMBEDDING,
    FontLicenseEnum.BI_CI,
    FontLicenseEnum.OFL,
  ]?.map((item) => ({ key: item, label: getFontLicenseLocales("name", item) }));

  const orderByItems: { key: string; label: string; onClick: () => void }[] = [
    {
      key: "date",
      label: t("최신순"),
      onClick: () =>
        handleDispatch({
          type: "setOrderBy",
          orderBy: "date",
        }),
    },
    {
      key: "name",
      label: t("이름순"),
      onClick: () =>
        handleDispatch({
          type: "setOrderBy",
          orderBy: "name",
        }),
    },
  ];

  const handleMenu = (queryParam: "type" | "license", key: string) => {
    if (queryParam === "type") {
      handleFontTypeOpen(true);
      if (query?.fontType?.includes(key as FontTypeEnum)) {
        handleDispatch({
          type: "setFontType",
          fontType: query?.fontType?.filter((item) => item !== key)?.sort(),
        });
      } else {
        handleDispatch({
          type: "setFontType",
          fontType: [...(query?.fontType || []), key as FontTypeEnum]?.sort(),
        });
      }
    } else {
      handleLicenseOpen(true);
      if (query?.license?.includes(key as FontLicenseEnum)) {
        handleDispatch({
          type: "setLicense",
          license: query?.license?.filter((item) => item !== key)?.sort(),
        });
      } else {
        handleDispatch({
          type: "setLicense",
          license: [...(query?.license || []), key as FontLicenseEnum]?.sort(),
        });
      }
    }
  };

  const getMenu = (
    queryParam: "type" | "license",
    items: { key: string; label: string }[]
  ) => {
    return items?.map((item) => ({
      key: item?.key,
      label: (
        <Checkbox
          checked={
            queryParam === "type"
              ? query?.fontType?.includes(item.key as FontTypeEnum)
              : query?.license?.includes(item.key as FontLicenseEnum)
          }
          onChange={() => handleMenu(queryParam, item.key)}
          onClick={(e) => e.stopPropagation()}
        >
          {item?.label}
        </Checkbox>
      ),
    }));
  };

  const getDropdownInputValue = (queryParam: "type" | "license") => {
    if (queryParam === "type") {
      switch (query?.fontType?.length) {
        case 0:
          return t("폰트 타입");
        case 1:
          return getFontTypeLocales(query?.fontType?.[0]);
        default:
          return `${getFontTypeLocales(
            query?.fontType?.[0] as FontTypeEnum
          )} ${t("외")} ${(query?.fontType?.length || 0) - 1}${t("개")}`;
      }
    } else {
      switch (query?.license?.length) {
        case 0:
          return t("라이센스");
        case 1:
          return getFontLicenseLocales("name", query?.license?.[0]);
        default:
          return `${getFontLicenseLocales(
            "name",
            query?.license?.[0] as FontLicenseEnum
          )} ${t("외")} ${(query?.license?.length || 0) - 1}${t("개")}`;
      }
    }
  };

  return (
    <FontListQueryContainer>
      <FilterSection>
        <PreviewTextBar
          value={previewText}
          placeholder={t("문구 적고 폰트 미리보기")}
          handleChange={handlePreviewTextChange}
        />
        <DropdownBlock>
          <Dropdown
            open={fontTypeOpen}
            menu={{ items: getMenu("type", fontTypeItems) }}
            trigger={["click"]}
            onOpenChange={handleFontTypeOpen}
          >
            <a onClick={(e) => e.preventDefault()}>
              <DropdownButton $open={fontTypeOpen}>
                {getDropdownInputValue("type")}
                {fontTypeOpen ? <UpOutlined /> : <DownOutlined />}
              </DropdownButton>
            </a>
          </Dropdown>
          <Dropdown
            open={licenseOpen}
            menu={{ items: getMenu("license", licenseItems) }}
            trigger={["click"]}
            onOpenChange={handleLicenseOpen}
          >
            <a onClick={(e) => e.preventDefault()}>
              <DropdownButton $open={licenseOpen}>
                {getDropdownInputValue("license")}
                {licenseOpen ? <UpOutlined /> : <DownOutlined />}
              </DropdownButton>
            </a>
          </Dropdown>
          <Dropdown
            open={orderByOpen}
            menu={{ items: orderByItems }}
            trigger={["click"]}
            onOpenChange={handleOrderByOpen}
          >
            <a onClick={(e) => e.preventDefault()}>
              <DropdownButton $open={orderByOpen}>
                {query?.orderBy === "date" ? t("최신순") : t("이름순")}
                {orderByOpen ? <UpOutlined /> : <DownOutlined />}
              </DropdownButton>
            </a>
          </Dropdown>
        </DropdownBlock>
      </FilterSection>
      <SliderSection>
        <MainSlider
          min={10}
          max={100}
          value={fontSize}
          sliderKey={t("크기")}
          sliderValue={`${fontSize} px`}
          handleChange={handleFontSizeChange}
        />
        <MainSlider
          min={1}
          max={9}
          value={query?.fontWeight}
          sliderKey={t("굵기 개수")}
          sliderValue={`${query?.fontWeight}${t("가지")}`}
          handleChange={(e) =>
            handleDispatch({
              type: "setFontWeight",
              fontWeight: e,
            })
          }
        />
      </SliderSection>
    </FontListQueryContainer>
  );
}
