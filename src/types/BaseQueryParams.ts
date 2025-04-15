import { FontLicenseEnum, FontTypeEnum } from "@/features";

export interface BaseQueryParams {
  offset?: number;
  limit?: number;
  sortBy?: string;
  orderBy?: string;
  search?: string;
  fontType?: FontTypeEnum[];
  fontWeight?: number;
  license?: FontLicenseEnum[];
}
