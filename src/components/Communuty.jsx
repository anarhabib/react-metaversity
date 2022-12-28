import React from "react";
import { useTranslation } from "react-i18next";


const Communuty = () => {

    const { t } = useTranslation();

  return (
    <>
    <div id="community" className="flex-column items-center justify-center container mx-auto text-center p-4 py-16 lg:px-16">
      <h1 className='text-xl lg:text-3xl font-bold text-[#371d6a]'>{t("about")}</h1>
      <p className='font-light my-8'>
     {t("aboutp")}
      </p>
    </div>
    </>
  );
};

export default Communuty;
