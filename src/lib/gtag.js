export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Log a pageview */
export const pageview = (url) => {
  window.gtag('config', GA_ID, { page_path: url });
};

/** Custom event */
export const gaEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
