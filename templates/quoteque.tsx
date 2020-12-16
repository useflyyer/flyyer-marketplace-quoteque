import React from "react"
import { TemplateProps } from "@flayyer/flayyer-types";
import classNames from "classnames";

import "../styles/tailwind.css";

import logo from "../static/logo.svg";

function overFlowStyle(lines = 1): Record<string, string>{
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: lines.toString(),
    WebkitBoxOrient: 'vertical',
  };
}

function Layer({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={classNames("absolute inset-0", className)} />;
}

const Logo = ({ className, ...props }: React.ComponentPropsWithoutRef<"img">) => (
  <img src={logo} className={classNames("filter-black" /* custom */, "w-36 h-36", "object-contain", className)} {...props} />
)

const SVGQuote = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg className="mr-4" width="82" height="49" viewBox="0 0 82 49" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.6639 0H38.1428C22.9274 21.1215 22.929 31.899 38.1428 49H0.305414C-1.32435 27.3131 3.20851 16.4951 22.6639 0Z" fill="black" />
    <path d="M66.5211 0H82C66.7846 21.1215 66.7862 31.899 82 49H44.1626C42.5329 27.3131 47.0657 16.4951 66.5211 0Z" fill="black" />
  </svg>
)
// Make sure to 'export default' a React component
export default function MainTemplate({ agent, variables }: TemplateProps) {
  const {
    title = 'Quotes of 2021',
    name = 'John Doe',
    role = 'Software Engineer',
    description = "There are many bad things that are bad for the eyes, but none are as bad as not washing your hands after eating something spicy.",
    logo = null,
  } = variables;

  if (agent.name === "whatsapp") {
    return (
      <Layer className="flex flex-col justify-start items-stretch px-16 py-12 text-black bg-yellow-300">
        <SVGQuote className="w-72 h-72" />
        {logo === null
          ?
          <Logo />
          :
          <img className="object-contain" src={logo}></img>
        }
      </Layer>
    )
  }

  return (
    <Layer className="flex flex-col justify-start items-stretch px-16 py-12 text-black bg-yellow-400">
      <h1 className="text-2xl mt-1 font-semibold tracking-wide" style={{...overFlowStyle(1)}}>{title}</h1>

      <div className="flex-grow flex flex-row justify-start items-stretch mt-10">
        <div>
          <SVGQuote />
        </div>

        <div className="flex flex-col justify-between">
          <blockquote className="text-2xl lg:text-5xl leading-snug lg:leading-snug font-serif font-medium" style={{...overFlowStyle(5)}}>
            {description}
          </blockquote>

          <div className="flex flex-row justify-start">
            <div>
              <svg width="1rem" height="5rem">
                <rect x="0rem" y="0" width="0.5rem" height="5rem" fill="black"></rect>
              </svg>


            </div>
            <div className="flex flex-col justify-start">
              <p className="text-2xl mt-1 font-semibold" style={{...overFlowStyle(1)}}>{name}</p>
              <p className="text-2xl mt-1 font-light" style={{...overFlowStyle(1)}}>{role}</p>
            </div>

          </div>
        </div>

        <div className="flex flex-col justify-end flex-shrink-0 w-1/5">
          {logo === null
            ?
            <Logo />
            :
            <img className="object-contain" src={decodeURIComponent(logo)}></img>
          }

        </div>
      </div>
    </Layer>
  );
}
