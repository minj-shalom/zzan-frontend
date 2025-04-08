"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ko } from "@/translations";
import { isClient, localStorage } from "./localStorage";
import { defaultLanguage } from "@/constants";
import { useEffect, useState } from "react";

const getFallbackLng = () => {
  if (isClient) {
    switch (window.navigator.language) {
      case "ko":
      case "ko-KR":
        return "ko";
      default:
        return "en";
    }
  }
};

const useInitializeI18n = () => {
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    // 클라이언트에서만 실행
    if (typeof window !== "undefined") {
      i18n
        .use(initReactI18next) // React와 통합
        .init({
          resources: {
            en: { translation: en },
            ko: { translation: ko },
          },
          fallbackLng: getFallbackLng(), // 기본 언어
          lng: localStorage.getItem(defaultLanguage) || getFallbackLng(),
          interpolation: {
            escapeValue: false, // React 자동 escaping 처리
          },
          detection: {
            order: ["localStorage", "navigator"], // 언어 탐지 순서
            caches: ["localStorage"], // 탐지 결과를 저장할 위치
          },
        })
        .then(() => {
          setI18nInitialized(true); // i18n 초기화 완료
        });
    }
  }, []); // 컴포넌트가 마운트될 때만 실행

  return i18nInitialized;
};

export default useInitializeI18n;
