import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script type='text/javascript'>
window._vwo_code = window._vwo_code || (function(){
var account_id=625971,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){
window.settings_timer=setTimeout(function () {_vwo_code.finish() },settings_tolerance);var a=d.createElement('style'),b=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+(+is_spa)+'&r='+Math.random());return settings_timer; }};window._vwo_settings_timer = code.init(); return code; }());
</script>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.ico"></link>
          <meta name="theme-color" content="#4f46e5" />
          <meta
            name="description"
            content=" Next.js reference store built using Nacelle, Shopify, and
            Contentful."
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
