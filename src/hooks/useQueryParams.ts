"use client";

import { FontLicenseEnum, FontTypeEnum } from "@/features";
import { BaseQueryParams } from "@/types";
import { useReducer } from "react";

export type QueryParamsActions =
  | { type: "pageMove"; page: number; pageSize: number }
  | {
      type: "setSortBy";
      sortBy: string;
    }
  | {
      type: "setOrderBy";
      orderBy: string;
    }
  | {
      type: "setSearch";
      search: string;
    }
  | {
      type: "setFontType";
      fontType: FontTypeEnum[];
    }
  | {
      type: "setFontWeight";
      fontWeight: number;
    }
  | {
      type: "setLicense";
      license: FontLicenseEnum[];
    };

function reduce(
  prev: BaseQueryParams,
  action: QueryParamsActions
): BaseQueryParams {
  switch (action.type) {
    case "pageMove":
      return {
        ...prev,
        offset: action.page * action.pageSize,
        limit: action.pageSize,
      };
    case "setSortBy":
      return {
        ...prev,
        sortBy: action.sortBy,
      };
    case "setOrderBy":
      return {
        ...prev,
        orderBy: action.orderBy,
      };
    case "setSearch":
      return {
        ...prev,
        search: action.search,
      };
    case "setFontType":
      return {
        ...prev,
        fontType: action.fontType,
      };
    case "setFontWeight":
      return {
        ...prev,
        fontWeight: action.fontWeight,
      };
    case "setLicense":
      return {
        ...prev,
        license: action.license,
      };
    default:
      return prev;
  }
}

export function useQueryParams(initialData: BaseQueryParams) {
  return useReducer(reduce, initialData);
}
