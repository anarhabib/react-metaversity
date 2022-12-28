import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { FloatButton } from "antd";

const Web3 = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto p-4 lg:px-16 flex-column justify-center items-center h-[100%] pt-40 pb-16">
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("crypto")}
        </h1>
        <p className="font-light my-8">{t("cryptop")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh")}
        </h1>

        <p className="font-light my-8">{t("cryptop1")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh1")}
        </h1>
        <p className="font-light my-8">{t("cryptop2")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh2")}
        </h1>
        <p className="font-light my-8">{t("cryptop3")}</p>
        <p className="font-light my-8">{t("cryptop4")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh3")}
        </h1>
        <p className="font-light my-8">{t("cryptop5")}</p>
        <p className="font-light my-8">{t("cryptop6")}</p>

        <p className="font-light my-8">{t("cryptop7")}</p>

        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh4")}
        </h1>

        <p className="font-light my-8">{t("cryptop8")}</p>
        <p className="font-light my-8">{t("cryptop9")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh5")}
        </h1>
        <p className="font-light my-8">{t("cryptop10")}</p>
        <p className="font-light my-8">{t("cryptop11")}</p>  
        <p className="font-light my-8">{t("cryptop12")}</p>
        <p className="font-light my-8">{t("cryptop13")}</p>
        <p className="font-light my-8">{t("cryptop14")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh6")}
        </h1>
        <p className="font-light my-8">{t("cryptop15")}</p>
        <ul className="my-8">
          <li>{t("cryptol1")}</li>
          <li>{t("cryptol2")}</li>
          <li>{t("cryptol3")}</li>
          <li>{t("cryptol4")}</li>
          <li>{t("cryptol5")}</li>
        </ul>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh7")}
        </h1>
        <p className="font-light my-8">{t("cryptop16")}</p>
        <p className="font-light my-8">{t("cryptop16.1")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh8")}
        </h1>
        <p className="font-light my-8">{t("cryptop17")}</p>
        <ol>
          <li>{t("cryptol6")}</li>
          <li>{t("cryptol7")}</li>
        </ol>
        <p className="font-light my-8">{t("cryptop18")}</p>
        <p className="font-light my-8">{t("cryptop18.1")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh9")}
        </h1>
        <p className="font-light my-8">{t("cryptop19")}</p>
        <p className="font-light my-8">{t("cryptop20")}</p>
        <p className="font-light my-8">{t("cryptop21")}</p>
        <p className="font-light my-8">{t("cryptop22")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh10")}
        </h1>
        <p className="font-light my-8">{t("cryptop23")}</p>
        <p className="font-light my-8">{t("cryptop24")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("cryptoh11")}
        </h1>
        <p className="font-light my-8">{t("cryptop25")}</p>
        <p className="font-light my-8">{t("cryptop26")}</p>
        <FloatButton.BackTop/>
     
      </div>
    </>
  );
};

export default Web3;
