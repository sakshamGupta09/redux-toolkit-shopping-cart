import { IMAGE_PREFIX } from "@constants/image-prefix";

const IMAGE_CONFIG = {
  XL: { size: "832/832", q: "80" },
  LG: { size: "612/612", q: "70" },
  SM: { size: "320/320", q: "90" },
  "1X": { size: "160/160", q: "80" },
  "2X": { size: "320/320", q: "60" },
};

export function getImageUrl(imageId: string) {
  return {
    lg: `${IMAGE_PREFIX}/${IMAGE_CONFIG.LG.size}/${imageId}?q=${IMAGE_CONFIG.LG.q}`,
    sm: `${IMAGE_PREFIX}/${IMAGE_CONFIG.SM.size}/${imageId}?q=${IMAGE_CONFIG.SM.q}`,
    "1x": `${IMAGE_PREFIX}/${IMAGE_CONFIG["1X"].size}/${imageId}?q=${IMAGE_CONFIG["1X"].q}`,
    "2x": `${IMAGE_PREFIX}/${IMAGE_CONFIG["2X"].size}/${imageId}?q=${IMAGE_CONFIG["2X"].q}`,
  };
}
