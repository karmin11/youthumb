import React, { useEffect } from 'react';

const AdSenseComponent = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="pub-8380561117524549"
           data-ad-slot="f08c47fec0942fa0"
           data-ad-format="DIRECT"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdSenseComponent;
