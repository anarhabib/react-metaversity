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
          {t("web3for")}
        </h1>
        <p className="font-light my-8">{t("web3forp1")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("web3forh1")}
        </h1>

        <p className="font-light my-8">{t("web3forp2")}</p>
        <p className="font-light my-8">{t("web3forp3")}</p>
        <p className="font-light my-8">{t("web3forp4")}</p>
        <p className="font-light my-8">{t("web3forh2")}</p>
        <p className="font-light my-8">{t("web3forp5")}</p>
        <p className="font-light my-8">{t("web3forp5.1")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("web3forh3")}
        </h1>
        <p className="font-light my-8">{t("web3forp6")}</p>
        <p className="font-light my-8">{t("web3forp7")}</p>
        <h1 className="text-xl lg:text-3xl font-bold text-[#371d6a]">
          {t("web3forh4")}
        </h1>

        <p className="font-light my-8">{t("web3forp8")}</p>
        <p className="font-light my-8">{t("web3forp9")}</p>
     <FloatButton.BackTop/>

      </div>
    </>
  );
};

export default Web3;
