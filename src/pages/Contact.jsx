import React from 'react'
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import { useTranslation } from 'react-i18next';

const Contact = ({query}) => {
  const { t } = useTranslation();
  

  return (
    <>
    <div className='contact-page container lg:p-16 p-4 py-24 lg:py-36 mx-auto flex-column lg:flex items-center justify-center w-full'>
    <Box className={query ? "hidden bg-white w-full h-full p-6 rounded-2xl  flex-column items-center justify-center " : "bg-white w-full h-full p-6 rounded-2xl  flex-column items-center justify-center "}>
          <h1 className="text-2xl lg:text-3xl text-center my-8">
          {t("modalh")}
          </h1>
          <p className="font-light text-center">
          {t("modalp")}
          </p>
          <div className="flex-column justify-center items-center text-center">
            <Input
              className="w-full my-8 z-[100]"
              type="text"
              color={"secondary"}
              placeholder={t("name")}
              required
            />
            <Input
              className="w-full my-8"
              type="text"
              color={"secondary"}
              placeholder={t("surname")}

            />
            <Input
              className="w-full my-8 text-xl "
              type="tel"
              color={"secondary"}
              placeholder={t("phone")}

            />
            <Input
              className="w-full my-8 text-xl "
              type="email"
              color={"secondary"}
              placeholder="Email"
            />

            <div className="flex-column justify-center items-center">
              <input type="checkbox" />
              <span>{t("subscribe")}</span>
            </div>
            <button
              className="bg-[#28154d] text-white text-xl lg:text-2xl w-full p-4 rounded-2xl my-4 lg:my-8"
              id="submit"
            >
              {t("apply")}
            </button>
          </div>
        </Box>
        <div className='flex-column items-center justify-center w-full text-center mt-10 lg:mt-0'>
          <h1 className='text-xl'>{t("adres")}</h1>
          <h1 className='text-xl'>Email: info@metaversity.az</h1>
        </div>
    </div>
    </>
  )
}

export default Contact