import React, { createContext, useState } from 'react';

function initializeDataLayer() {
  const dataLayer = [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-FYK9GERL21');

  return dataLayer;
}

const GoogleAnalyticsContext = createContext({});

const GoogleAnalyticsProvider = ({ children, context }) => {
  const [dataLayer, setDataLayer] = useState(initializeDataLayer);

  return (
    <GoogleAnalyticsContext.Provider value={dataLayer}>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FYK9GERL21"
      ></script>
      {children}
    </GoogleAnalyticsContext.Provider>
  );
};

export { GoogleAnalyticsContext, GoogleAnalyticsProvider };
