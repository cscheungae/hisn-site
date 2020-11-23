import React from "react";
import DownloadIcon from "../images/svg/download-24px.svg";
import { useMemberForm } from "../hooks/useMemberForm";

import "./joinUs.scss";

const JoinUs = () => {
  const memberForm = useMemberForm();

  return (
    <div className="joinUs" id="joinUs">
      <div className="container">
        <h1>加入HISN</h1>
        <h4>會員資格︰</h4>
        <div className="flex">
          <p>
            歡迎年齡介乎15-45
            歲來自不同主流學校的聽障青年加入聽障青年支援網絡(HISN)的大家庭
          </p>
          <p>
            **凡加入HISN會員，須先成為「香港聾人福利促進會」會員，有關申請方法，請瀏覽
            <a
              className="link"
              href="http://www.deaf.org.hk/ch/member.php"
              target="_blank"
              rel="noreferrer"
            >
              http://www.deaf.org.hk/ch/member.php
            </a>
          </p>
        </div>
        <div className="center">
          <a
            className="downloadLink"
            href={memberForm.file.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex">
              <DownloadIcon id="downloadIcon" />
              <span>下載入會表格</span>
            </div>
          </a>
        </div>
        <h4>交回表格﹕</h4>
        <p>
          請將填妥之表格寄回將軍澳尚德村尚美樓六樓香港聾人福利促進會將軍澳綜合服務中心，封面註明「聽障青年支援網絡收」或電郵至
          hisn@deaf.org.hk。
        </p>
        <p>
          如有查詢，可致電
          <a className="link" href="tel:27111974">
            2711 1974
          </a>
          、傳真
          <a className="link" href="fax:27614390">
            27614390
          </a>
          或電郵
          <a className="link" href="mailto:hisn@deaf.org.hk">
            hisn@deaf.org.hk
          </a>
          與陸姑娘聯絡。
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
