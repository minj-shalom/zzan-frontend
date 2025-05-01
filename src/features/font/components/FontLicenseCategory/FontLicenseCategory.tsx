"use client";

import { MainEmpty, MainTable } from "@/components";
import {
  ColumnContainer,
  FontLicenseCategoryBody,
  FontLicenseCategoryContainer,
  FontLicenseCategoryHeader,
  FontLicenseInfo,
} from "./styles";
import { useTranslation } from "react-i18next";
import {
  FontInterface,
  FontLicenseCategoryInterface,
  FontLicenseEnum,
} from "../../types";
import { getFontLicenseLocales } from "@/locales";
import { ColumnsType } from "antd/es/table";
import { Empty } from "antd";

type FontLicenseCategoryProps = {
  font: FontInterface;
};

export function FontLicenseCategory({ font }: FontLicenseCategoryProps) {
  const { t } = useTranslation();

  const dataSource: FontLicenseCategoryInterface[] = Object.values(
    FontLicenseEnum
  )?.map((item) => ({
    category: item,
    name: t(getFontLicenseLocales("name", item)),
    description: t(getFontLicenseLocales("description", item)),
    enabled: font?.license?.category?.includes(item),
  }));

  const columns: ColumnsType<FontLicenseCategoryInterface> = [
    {
      dataIndex: "name",
      title: <ColumnContainer>{t("카테고리")}</ColumnContainer>,
      render: (value: string) => <ColumnContainer>{value}</ColumnContainer>,
    },
    {
      dataIndex: "description",
      title: <ColumnContainer>{t("사용 범위")}</ColumnContainer>,
      render: (value: string) => <ColumnContainer>{value}</ColumnContainer>,
    },
    {
      dataIndex: "enabled",
      title: <ColumnContainer>{t("허용 여부")}</ColumnContainer>,
      render: (value: boolean) => (
        <ColumnContainer>{value ? "O" : "X"}</ColumnContainer>
      ),
    },
  ];

  return (
    <FontLicenseCategoryContainer>
      <FontLicenseCategoryHeader>
        {t("라이센스 요약표")}
      </FontLicenseCategoryHeader>
      <FontLicenseCategoryBody>
        <MainTable
          rowKey={(record) => record?.category}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          locale={{
            emptyText: (
              <MainEmpty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={t("라이센스 정보가 없습니다.")}
              />
            ),
          }}
        />
        <FontLicenseInfo>
          <FontLicenseInfo>{`* ${t(
            "위 사용범위는 참고용으로, 정확한 사용범위는 이용 전 폰트 저작권자에게 확인바랍니다."
          )}`}</FontLicenseInfo>
          <FontLicenseInfo>{`* ${t(
            "사용범위는 저작권자의 규정에 따라 달라질 수 있습니다."
          )}`}</FontLicenseInfo>
          <FontLicenseInfo>{`* ${t(
            "저작권자는 페이지 상단의 폰트 이름 밑에 있습니다."
          )}`}</FontLicenseInfo>
        </FontLicenseInfo>
      </FontLicenseCategoryBody>
    </FontLicenseCategoryContainer>
  );
}
