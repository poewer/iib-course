import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const ADS = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5725385807847480"
        crossOrigin="anonymous">
      </Script>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5725385807847480"
        data-ad-slot="6129161245"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </>
  );
};

export default ADS;
