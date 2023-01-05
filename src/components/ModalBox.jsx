import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";


const ModalBox = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();


  return (
    <>
      <div className="w-full my-8 p-8 flex-column justify-center items-center  bg-[#c9d5e0] border-t-[1px]  border-b-2 border-[#6011ff93] shadow-[#6011ff] shadow-2xl -z-10">
        <h1 className="text-3xl text-center my-8">
          {t("modalbox")}
        </h1>
        <div className="flex justify-center items-center">
          <button
            onClick={handleOpen}
            className="text-2xl my-8 py-4 px-16 rounded-[10px] shadow-2xl shadow-black bg-gradient-to-r from-[#28154d] to-[#6011ff] text-white"
          >
            {t("contactme")}
          </button>
        </div>
      </div>

      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="bg-white absolute top-[50%] left-[50%] w-[80%] p-6 lg:w-[50%] sm:scale-[.7] lg:scale-[1] rounded-2xl transform -translate-x-1/2 -translate-y-1/2 flex-column items-center justify-center">
          <div className="w-full flex justify-end items-center">
            <AiOutlineClose
              size={30}
              onClick={handleClose}
              className="cursor-pointer"
            />
          </div>
          <h1 className="text-2xl lg:text-3xl text-center my-4">
            {t("modalh")}
          </h1>
          <p className="font-light text-center">
          {t("modalp")}

          </p>
          <div className="flex-column justify-center items-center text-center">
            <Input
              className="w-full my-2 lg:my-4 "
              type="text"
              color={"secondary"}
              placeholder={t("name")}
              required
            />
            <Input
              className="w-full my-2 lg:my-4 "
              type="text"
              color={"secondary"}
              placeholder={t("surname")}
            />
            <Input
              className="w-full my-2 lg:my-4 text-xl "
              type="tel"
              color={"secondary"}
              placeholder={t("phone")}
            />
            <Input
              className="w-full my-2 lg:my-4 text-xl "
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
      </Modal>
    </>
  );
};

export default ModalBox;
