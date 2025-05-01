"use client";

import {
  CardSection,
  FontListContainer,
  ScrollIndicator,
  StyledLoadingOutlined,
} from "./styles";
import { Spin } from "antd";
import { useInView } from "react-intersection-observer";
import { QueryParamsActions, useQueryParams } from "@/hooks";
import { useCallback, useEffect, useState } from "react";
import { useGetFontList } from "../../api";
import { FontCard } from "../FontCard";
import { fontListInitialQuery } from "@/constants";
import { FontListQuery } from "../FontListQuery";
import { Spinner } from "@/components";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { FontLicenseEnum, FontTypeEnum } from "../../types";

export function FontList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { ref, inView } = useInView();

  const [query, dispatch] = useQueryParams(fontListInitialQuery);

  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage } =
    useGetFontList(query);

  const fontList = data?.pages?.flatMap((page) => page?.data) || [];

  const [fontTypeOpen, setFontTypeOpen] = useState(false);
  const [licenseOpen, setLicenseOpen] = useState(false);
  const [orderByOpen, setOrderByOpen] = useState(false);
  const [previewText, setPreviewText] = useState("");
  const [debouncedPreviewText, setDebouncedPreviewText] = useState("");
  const [fontSize, setFontSize] = useState(30);

  const handlePagination = useCallback(
    (page: number) => {
      dispatch({
        type: "pageMove",
        page: page - 1,
        pageSize: fontListInitialQuery?.limit,
      });
    },
    [dispatch]
  );

  const handleDispatch = useCallback(
    (action: QueryParamsActions) => {
      handlePagination(1);
      dispatch(action);
    },
    [dispatch, handlePagination]
  );

  const handleFontTypeOpen = (state: boolean) => {
    setFontTypeOpen(state);
  };

  const handleLicenseOpen = (state: boolean) => {
    setLicenseOpen(state);
  };

  const handleOrderByOpen = (state: boolean) => {
    setOrderByOpen(state);
  };

  const handleDebouncedPreviewTextChange = debounce((newText: string) => {
    setDebouncedPreviewText(newText);
  }, 30);

  const handlePreviewTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;

      if (newText !== previewText) {
        setPreviewText(newText);
        handleDebouncedPreviewTextChange(newText);
      }
    },
    [previewText, handleDebouncedPreviewTextChange]
  );

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  useEffect(() => {
    const orderBy = searchParams.get("orderBy");
    const fontType = searchParams.get("fontType");
    const fontWeight = searchParams.get("fontWeight");
    const license = searchParams.get("license");

    const validOrderBy = ["date", "name", "view"];
    const validFontTypes = Object.values(FontTypeEnum);
    const validLicenses = Object.values(FontLicenseEnum);

    const actions: QueryParamsActions[] = [];

    // ✅ orderBy
    if (!validOrderBy.includes(orderBy || "")) {
      actions.push({ type: "setOrderBy", orderBy: "date" });
    } else if (query.orderBy !== orderBy) {
      actions.push({ type: "setOrderBy", orderBy: orderBy || "date" });
    }

    // ✅ fontType
    if (fontType) {
      try {
        const parsed = JSON.parse(fontType);
        if (Array.isArray(parsed)) {
          const filtered = parsed.filter((v) => validFontTypes.includes(v));
          if (
            JSON.stringify(query.fontType?.sort()) !==
            JSON.stringify(filtered.sort())
          ) {
            actions.push({ type: "setFontType", fontType: filtered });
          }
        }
      } catch {
        // 잘못된 JSON이므로 무시
      }
    }

    // ✅ fontWeight
    const weightNum = Number(fontWeight);
    if (!Number.isInteger(weightNum) || weightNum < 1 || weightNum > 9) {
      actions.push({ type: "setFontWeight", fontWeight: 1 });
    } else if (query.fontWeight !== weightNum) {
      actions.push({ type: "setFontWeight", fontWeight: weightNum });
    }

    // ✅ license
    if (license) {
      try {
        const parsed = JSON.parse(license);
        if (Array.isArray(parsed)) {
          const filtered = parsed.filter((v) => validLicenses.includes(v));
          if (
            JSON.stringify(query.license?.sort()) !==
            JSON.stringify(filtered.sort())
          ) {
            actions.push({ type: "setLicense", license: filtered });
          }
        }
      } catch {
        // 잘못된 JSON이므로 무시
      }
    }

    actions.forEach(dispatch);
  }, []);

  useEffect(() => {
    router.push(
      `/all?orderBy=${query?.orderBy}&fontType=${JSON.stringify(
        query?.fontType
      )}&fontWeight=${query?.fontWeight}&license=${JSON.stringify(
        query?.license
      )}`,
      { scroll: false }
    );
  }, [query]);

  return (
    <FontListContainer>
      <FontListQuery
        query={query}
        fontTypeOpen={fontTypeOpen}
        licenseOpen={licenseOpen}
        orderByOpen={orderByOpen}
        previewText={previewText}
        fontSize={fontSize}
        handleDispatch={handleDispatch}
        handleFontTypeOpen={handleFontTypeOpen}
        handleLicenseOpen={handleLicenseOpen}
        handleOrderByOpen={handleOrderByOpen}
        handlePreviewTextChange={handlePreviewTextChange}
        handleFontSizeChange={handleFontSizeChange}
      />
      {fontList?.length === 0 && isLoading && <Spinner />}
      <CardSection>
        {fontList?.map((item, index) => (
          <FontCard
            key={`font-card-item-${index}`}
            font={item}
            debouncedPreviewText={debouncedPreviewText}
            fontSize={fontSize}
          />
        ))}
      </CardSection>
      {hasNextPage && <ScrollIndicator ref={ref} />}
      {isFetchingNextPage && <Spin indicator={<StyledLoadingOutlined />} />}
    </FontListContainer>
  );
}
