"use client";

import { SearchOutlined } from "@ant-design/icons";
import { debounceFunction } from "@/utils";
import { searchFontListInitialQuery } from "@/constants";
import { useInView } from "react-intersection-observer";
import { useSearchFont } from "@/features";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FontAuthor,
  FontTitle,
  ScrollIndicator,
  SearchBar,
  SearchFontContainer,
  SearchResultBlock,
  SearchResultContainer,
  SearchResultEmpty,
  SpinBlock,
  StyledLoadingOutlined,
} from "./styles";
import { useQueryParams } from "@/hooks";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

const isFetchingNextPage = true;

export function SearchFont() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const router = useRouter();

  const [query, dispatch] = useQueryParams(searchFontListInitialQuery);

  const { data, hasNextPage, fetchNextPage } = useSearchFont(query);

  const [searchText, setSearchText] = useState("");
  const [fontListOpen, setFontListOpen] = useState(false);

  const fontList = useMemo(
    () => data?.pages?.flatMap((page) => page?.data) || [],
    [data?.pages]
  );

  const handlePagination = (page: number) => {
    dispatch({
      type: "pageMove",
      page: page - 1,
      pageSize: searchFontListInitialQuery?.limit,
    });
  };

  const handleSearch = debounceFunction((search: string) => {
    handlePagination(1);
    dispatch({
      type: "setSearch",
      search,
    });
  }, 200);

  const handleSearchTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;

      if (newText !== searchText) {
        setSearchText(newText);
        handleSearch(newText);
      }
    },
    [searchText, handleSearch]
  );

  const handleClick = (id: number) => {
    router.push(`/font/${id}`);
  };

  const getSearchResult = () => {
    return [
      ...fontList?.map((item, index) => {
        const match = item?.font_face?.match(
          /font-family:\s*['"]?([^;'"]+)['"]?;/
        );
        const fontFamily = match?.[1];

        return {
          key: item?.id,
          label: (
            <SearchResultBlock
              key={`search-font-item-${index}`}
              onClick={() => handleClick(item?.id)}
              $fontFamily={fontFamily}
            >
              <FontTitle>{item?.title}</FontTitle>
              <FontAuthor>{item?.author}</FontAuthor>
            </SearchResultBlock>
          ),
        };
      }),
      ...(hasNextPage
        ? [
            {
              key: "scroll-indicator",
              label: <ScrollIndicator ref={ref} />,
            },
          ]
        : []),
      ...(isFetchingNextPage && hasNextPage
        ? [
            {
              key: "loading",
              label: (
                <SpinBlock>
                  <Spin indicator={<StyledLoadingOutlined />} />
                </SpinBlock>
              ),
            },
          ]
        : []),
    ];
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  useEffect(() => {
    fontList?.forEach((item) => {
      const styleId = `font-${item?.id}`;
      if (document.getElementById(styleId)) return;
      const fontFaceText = item?.font_face?.replace(/\\n/g, "\n");
      const importMatch = fontFaceText?.match(
        /@import\s+url\(['"]?(.+?)['"]?\);?/
      );
      if (importMatch) {
        const link = document.createElement("link");
        link.id = styleId;
        link.rel = "stylesheet";
        link.href = importMatch[1];
        document.head.appendChild(link);
        return;
      }
      if (fontFaceText?.includes("@font-face")) {
        const style = document.createElement("style");
        style.id = styleId;
        style.innerText = fontFaceText;
        document.head.appendChild(style);
      }
    });
  }, [fontList]);

  return (
    <SearchFontContainer
      open={fontListOpen}
      menu={{ items: getSearchResult() }}
      dropdownRender={(menu) => (
        <SearchResultContainer>
          {query?.search !== "" ? (
            menu
          ) : (
            <SearchResultEmpty>
              {t("폰트 이름 또는 제작자로 검색해보세요.")}
            </SearchResultEmpty>
          )}
        </SearchResultContainer>
      )}
      trigger={["click"]}
      onOpenChange={setFontListOpen}
    >
      <a onClick={(e) => e.preventDefault()}>
        <SearchBar
          value={searchText}
          placeholder={t("폰트 이름 및 제작자로 검색")}
          suffix={<SearchOutlined />}
          allowClear
          onChange={handleSearchTextChange}
        />
      </a>
    </SearchFontContainer>
  );
}
