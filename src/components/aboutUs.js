import React from "react";

import "./aboutUs.scss";

const AboutUs = () => (
  <div className="aboutUs" id="aboutUs">
    <div className="container">
      <h1>認識我們</h1>
      <p>
        聽障青年支援網絡 (Hearing Impaired Support Network)
        於二零一一年五月成立，由一群來自不同主流學校的聽障青年組成，旨在將來自不同主流學校的聽障青年凝聚在一起，透過不同的聚會和分享活動，互相認識，彼此支援大家所面對的困難，並從中建立深厚的友誼，在助人自助的生命中成長。
      </p>
      <p>
        與此同時，希望透過聽障青年支援網絡(HISN)，共同建立一個不分彼此的平台，透過不同的餘暇活動及義務工作，給予聽障青年適當的機會挑戰自我，從中學習瞭解個人的潛能和取得成功感，同時也能為社會作出貢獻。
      </p>
      <h2>宗旨</h2>
      <q className="slogan">眼在看、心在聽；聽障事、齊分享</q>
      <ul>
        <li>
          凝聚來自不同主流學校的聽障青年，互相認識，交流自身的經驗及心得，並從中建立深厚的友誼，在助人自助的生命中成長，貫徹「眼在看、心在聽﹔聽障事、齊分享」的宗旨
        </li>
        <div className="divider"></div>
        <li>
          提供機會予聽障青年策劃，推行各項社會活動及交流活動，擴闊聽障青年的視野，從中汲取社會經驗，培育及訓練聽障青年的領導才能及社會責任感，為現今社會發展作出貢獻
        </li>
        <div className="divider"></div>
        <li>
          設立各式各樣的平台，鼓勵及加強聽障青年間的彼此支持及支援，使他們能互勉互勵，自強不息，培養自尊自重的精神
        </li>
      </ul>
    </div>
  </div>
);

export default AboutUs;
