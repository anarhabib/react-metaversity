import React from 'react'
import "../i18n";
import { useTranslation } from "react-i18next";
import { FloatButton } from 'antd';






const Web3 = () => {

    const { t } = useTranslation();

    return (
    <>
    <div className='container mx-auto lg:px-16 p-4 flex-column justify-center items-center h-[100%] pt-40 pb-16'>
        <h1 className='text-xl lg:text-3xl font-bold text-[#371d6a]'>{t("web3")}</h1>
        <h5 className='my-8'>{t("web3h1")}</h5>
        <p className='font-light my-8'>{t("web3p1")}</p>
        <p className='font-light my-8'>{t("web3p2")}</p>
        <p className='font-light my-8'>{t("web3p3")}</p>
        <p className='font-light my-8'>{t("web3p4")}</p>
        <p className='font-light my-8'>{t("web3p5")}</p>
        <p className='font-light my-8'>{t("web3p6")}</p>
        <p className='font-light my-8'>{t("web3p7")}</p>
        <p className='font-light my-8'>{t("web3p8")}</p>
        <p className='font-light my-8'>{t("web3p9")}</p>
        <h1 className='text-xl lg:text-3xl font-bold text-[#371d6a]'>{t("web3h2")}</h1>
        <p className='font-light my-8'>{t("web3p10")}</p>
        <p className='font-light my-8'>{t("web3p11")}</p>
        <p className='font-light my-8'>{t("web3p12")}</p>
        <p className='font-light my-8'>{t("web3p13")}</p>
        <p className='font-light my-8'>{t("web3p14")}</p>
        <p className='font-light my-8'>{t("web3p15")}</p>
        <p className='font-light my-8'>{t("web3p16")}</p>
     <FloatButton.BackTop/>

    </div>
    </>
  )
}

export default Web3