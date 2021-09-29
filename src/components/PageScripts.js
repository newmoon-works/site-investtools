import React from 'react';

export default function PageScripts() {
  if (process.env.NEXT_PUBLIC_ENV !== 'dev') {
    return (
      <>
        {/*Global site tag (gtag.js) - Google Analytics*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-181473567-1" />
        <script dangerouslySetInnerHTML={{
          __html:
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-181473567-1');
            gtag('config', 'G-R0H77YJN3F');
            `
        }} />

        {/*Google Tag Manager*/}
        <script dangerouslySetInnerHTML={{
          __html:
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PXJ6DDW');`
        }} />
      </>
    )
  } else {
    return <meta name="env" content="development" />
  }
}