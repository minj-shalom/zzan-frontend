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

export function FontList() {
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

  const handlePagination = (page: number) => {
    dispatch({
      type: "pageMove",
      page: page - 1,
      pageSize: fontListInitialQuery?.limit,
    });
  };

  const handleDispatch = (action: QueryParamsActions) => {
    handlePagination(1);
    dispatch(action);
  };

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
            key={`font-item-${index}`}
            data={item}
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
