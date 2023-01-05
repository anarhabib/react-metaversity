import React, { useEffect, useState } from "react";
import i18n from 'i18next';


const News = ({query}) => {

const lang = i18n.language





  const data = [
    {
      id: 1,
      description:
        "13 oktyabr 2022  Keçən ay BAƏ-nin İqtisadiyyat Nazirliyi rəqəmsal məkanda “ofis” açdı. Digər Körfəz ölkələri də metaversedə öz izlərini artırmaqda maraqlıdırlar. Fevral ayında Səudiyyə Ərəbistanının mübahisəli meqapolisi NEOM öz metaverse qurmaq üçün 1 milyard dollar sərmayə qoyduğunu elan etdi.",
      
     descriptionEn:
       "13 October 2022 Last month, the Emirati Ministry of Economy opened an “office” in the digital space.Other Gulf states are also interested in increasing their footprint in the metaverse. In February, Saudi Arabia’s controversial megacity NEOM announced a $1 billion investment to build its own metaverse."
      },
    {
      id: 2,
      description:
        "25 Noyabr 2022 Sony, İdman Sahəsində Tam Metaverse Təcrübəsi Təklif etmək üçün 3D Animasiya Şirkəti “Beyond Sports”-u Alır! Əyləncə və elektronika nəhəngi Sony bu yaxınlarda 3D animasiya yaratmaq üçün real dünya məlumatlarından istifadə etmək üzrə ixtisaslaşan Beyond Sports şirkətinin satın alınmasını tamamladı. Bildirilir ki, bu satınalma ilə şirkət artıq öz portfelində olan digər şirkətlərin texnologiyası ilə tamamlanan idman müsabiqələri üçün tam metaverse təcrübəsi təklif edə bilər.",
   
        descriptionEn:
        "25 November 2022 Entertainment and electronics giant Sony has recently completed the acquisition of Beyond Sports, a company specializing in using real-world data to produce 3D animation. With this purchase, the company is now reportedly able to offer a full metaverse experience for sports matches, complete with tech from other companies already in its portfolio."
      },
    {
      id: 3,
      description:
        "22 Noyabr 2022 AIR MILES® Mükafat Proqramı Metaverse-in ilk brend-aqnostik loyallıq proqramı olmaq üçün Tokens.com və Metaverse Group ilə əməkdaşlıq etdiyini elan etməkdən məmnundur. Bu yeni tərəfdaşlıq modeli rəqəmsal dünyada proqramın miqyasını genişləndirərkən tərəfdaş brendlərin istehlakçılarla əlaqə qurması üçün yeni innovativ kanallar yaratmaq üçün AIR MILES üçün qapıları açacaq.",
    
        descriptionEn:
        "The AIR MILES® Reward Program is thrilled to announce that it has partnered with Tokens.com and Metaverse Group to become the first brand-agnostic loyalty program of the Metaverse. This new partnership model will open the doors for AIR MILES to create innovative new channels for partner brands to connect with consumers while extending the scale of the program in the digital world."
      },
  ];

  const [current, setCurrent] = useState(0);

  const slideChanger = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      slideChanger();
    }, 5000);
  });

  return (
    <>
      <div className={query ? "hidden items-center justify-center w-full h-[370px] xl:h-[200px] p-8 bg-gradient-to-b from-[#28154d] to-[#6011ff] text-white text-center rounded rounded-bl-[100px] rounded-br-[100px] lg:rounded-br-[0px] shadow-2xl -z-50" : "flex items-center justify-center w-full h-[370px] xl:h-[200px] p-8 bg-gradient-to-b from-[#28154d] to-[#6011ff] text-white text-center rounded rounded-bl-[100px] rounded-br-[100px] lg:rounded-br-[0px] shadow-2xl -z-50"}>
        <div className="container mx-auto lg:px-16 flex-row items-center justify-center relative">
          {data.map((carouselData, index) => {
            const { description, descriptionEn, id } = carouselData;

            return (
              <div
                key={id}
                className={
                  index === current
                    ? " opacity-1 transition-all duration-700 scale-100"
                    : "absolute opacity-0 scale-0 transition-all duration-500 -z-50"
                }
              >
                <h3>{lang === 'az' ? description : descriptionEn}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
