import { FontFaceInterface } from "./FontFaceInterface";
import { FontLicenseInterface } from "./FontLicenseInterface";
import { FontTypeEnum } from "./FontTypeEnum";

export interface FontInterface {
  id: number;
  title: string;
  author: string;
  type: FontTypeEnum;
  font_weight: number;
  font_face: string;
  font_face_list?: FontFaceInterface[];
  download_url: string;
  license: FontLicenseInterface;
  created_at: string;
  updated_at?: string;
}
