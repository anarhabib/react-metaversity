import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import triangle from "../assets/img/triangle-png.png";
import { useTranslation } from "react-i18next";



const Vision = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { t } = useTranslation()



  // const data = [
  //   {
  //     id: "panel1",
  //     heading: "fdkjfdk",
  //     description:
  //       "Hədəf seqmentlərin yaş qrupuna/səriştə sahəsinə/yerləşdiyi yerə görə “metaverse” və “blockchain”in inkişafı üçün bacarıqların tətbiq olunması",
  //     color: "#00007c",
  //   },
  //   {
  //     id: "panel2",
  //     heading: "Azərbaycan “Metaverse” İcmasında",
  //     description:
  //       "Dünya birliyində iştirak etmək və gələcəkdə bu nəhəng pastadan bir parça paylaşmaq üçün “Metaverse” ekosisteminin yaradılması",
  //     color: "#007ab0",
  //   },
  //   {
  //     id: "panel3",
  //     heading: "Gələcəyə Erkən Uyğunlaşma",
  //     description:
  //       "Dünya bu texnologiyaları yeni öyrənərkən, ilk adapterlərdən biri olmaq fürsəti əldə etmək və gənclər üçün yaxşı gəlirli iş imkan-ları sferasını təmin etmək, həmçinin veb 3.0 sahəsində Azərbaycan üçün yüksək dəyərli ixrac iqtisadiyyatı yaratmaq",
  //     color: "#8ccde9",
  //   },
  // ];

  const [rotationDeg, stateRotationDeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (rotationDeg === 360) {
        stateRotationDeg(0);
      } else {
        stateRotationDeg(rotationDeg + 0.15);
      }
    }, 0);
    return () => clearInterval(interval);
  }, [rotationDeg]);

  return (
    <>
      <div className="container mx-auto p-4 py-16 lg:px-16  h-full flex justify-center items-center -z-10">
        <div className="w-full 2xl:w-[50%]">
          <h1 className="font-bold text-5xl text-[#371d6a] leading-[68px]">
          {t("visionh")}
          </h1>
          <h2 className="mt-12 text-xl font-light">
          {t("visionp")}
          </h2>
              <div className="accordion">
                <Accordion
                  sx={{
                    width: "100%",
                    bgcolor: "transparent",
                    boxShadow: "none",
                    marginTop: "32px",
                  }}
                  
                  // defaultExpanded={true}
                  onChange={handleChange()}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                      transition: ".3s",
                      "&:hover": { color: "#9632e3" },
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        flexShrink: 0,
                        fontSize: "25px",
                        fontWeight: "bolder",
                        color: "#00007c",
                        fontFamily: "Poppins-medium",
                      }}
                    >
                      {t("vision1h")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Poppins-medium",
                        fontSize: "24px",
                        fontWeight: "light",
                      }}
                    >
                      {t("vision1p")}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    width: "100%",
                    bgcolor: "transparent",
                    boxShadow: "none",
                    marginTop: "32px",
                  }}
                  // defaultExpanded={true}
                  onChange={handleChange()}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                      transition: ".3s",
                      "&:hover": { color: "#9632e3" },
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        flexShrink: 0,
                        fontSize: "25px",
                        fontWeight: "bolder",
                        color: "#007ab0",
                        fontFamily: "Poppins-medium",
                      }}
                    >
                      {t("vision2h")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Poppins-medium",
                        fontSize: "24px",
                        fontWeight: "light",
                      }}
                    >
                      {t("vision2p")}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    width: "100%",
                    bgcolor: "transparent",
                    boxShadow: "none",
                    marginTop: "32px",
                  }}
                  // defaultExpanded={true}
                  onChange={handleChange()}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                      transition: ".3s",
                      "&:hover": { color: "#9632e3" },
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        flexShrink: 0,
                        fontSize: "25px",
                        fontWeight: "bolder",
                        color: "#8ccde9",
                        fontFamily: "Poppins-medium",
                      }}
                    >
                      {t("vision3h")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontFamily: "Poppins-medium",
                        fontSize: "24px",
                        fontWeight: "light",
                      }}
                    >
                      {t("vision3p")}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
        </div>
        <div className="2xl:w-[50%] hidden 2xl:flex items-center justify-center">
          <img
            style={{ rotate: `${rotationDeg}deg` }}
            className="2xl:w-[490px]  "
            src={triangle}
            alt="triangle"
          />
        </div>
      </div>
    </>
  );
};

export default Vision;
