import React from "react";
import HomeServicesModule from "@/app/components/modules/HomeServicesModule";
import event from "@/app/images/events.png";
import activation from "@/app/images/activation.png";
import branding from "@/app/images/branding.jpg";

import Heading from "../Heading";
export default function Service() {
  const servicesData = [
    {
      logo: event,
      to: "../services/event",
      alt: "Alt text for first image",
      title: "Event",
      des: "We make your events special and stress-free. We handle everything - from planning to execution.",
    },
    {
      logo: activation,
      to: "../services/activation",
      alt: "Alt text for third image",
      title: "Activation",
      des: "Activate your brand with Connect Events! Our activation services are all about making your brand come to life.",
    },
    {
      logo: branding,
      to: "../services/branding",
      alt: "Alt text for second image",
      title: "Branding",
      des: "We go beyond events to help your brand shine. Our branding services are designed to make your message stand out.",
    },
  ];
  return (
    <div className="h-auto  w-full flex items-center flex-col pb-10 bg-[#ffffff]">
      <Heading title="Our Services" />
      <div className=" w-11/12  flex justify-evenly flex-wrap">
        {servicesData.map((service, index) => (
          <HomeServicesModule
            key={index}
            to={service.to}
            logo={service.logo}
            alt={service.alt}
            title={service.title}
            des={service.des}
          />
        ))}
      </div>
    </div>
  );
}
