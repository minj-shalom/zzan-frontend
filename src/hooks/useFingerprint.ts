"use client";

import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export function useFingerprint() {
  const [fingerprint, setFingerprint] = useState<object | undefined>(undefined);

  useEffect(() => {
    const getFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const fingerprint = {
        ...result,
        components: {
          dateTimeLocale: result?.components?.dateTimeLocale,
          fontPreferences: result?.components?.fontPreferences,
          fonts: result?.components?.fonts,
          languages: result?.components?.languages,
          platform: result?.components?.platform,
          timezone: result?.components?.timezone,
          vendor: result?.components?.vendor,
          vendorFlavors: result?.components?.vendorFlavors,
        },
      };
      setFingerprint(fingerprint);
    };

    getFingerprint();
  }, []);

  return { fingerprint };
}
