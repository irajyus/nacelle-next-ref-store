import { CartProvider, CheckoutProvider } from '@nacelle/react-hooks';
import createShopifyCheckoutClient from '@nacelle/shopify-checkout';
import Layout from 'layout/Layout';
import '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { GTM_ID, pageview } from '../lib/gtm';

// The `AppContainer` overrides Next's default `App` component.
// (https://nextjs.org/docs/advanced-features/custom-app)

// The `AppContainer` utilizes `CartProvider` and `CheckoutProvider` from
// `@nacelle/react-hooks` in order to manage cart and checkout data.
// (https://github.com/getnacelle/nacelle-react/tree/main/packages/react-hooks)

// A Shopify Checkout client is created from `@nacelle/shopify-checkout`
// and passed to the `CheckoutProvider`.
// (https://github.com/getnacelle/nacelle-js/tree/main/packages/shopify-checkout)

function AppContainer({ Component, pageProps }) {
  const checkoutClient = createShopifyCheckoutClient({
    myshopifyDomain: process.env.NEXT_PUBLIC_MYSHOPIFY_DOMAIN,
    storefrontCheckoutToken:
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_CHECKOUT_TOKEN,
    storefrontApiVersion: process.env.NEXT_PUBLIC_STOREFRONT_API_VERSION
  });
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <CartProvider>
      <CheckoutProvider checkoutClient={checkoutClient}>
        {/* Google Tag Manager - Global base code */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default AppContainer;
