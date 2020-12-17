import React from "react"
import { TemplateProps } from "@flayyer/flayyer-types";
import classNames from "classnames";

import "../styles/tailwind.css";

import logo from "../static/logo.svg";

function Layer({ className, ...props}: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={classNames("absolute inset-0", className)} />;
}

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }: TemplateProps) {
  const {
    quoteTheme = 'The World In 2021',
    author =  'Ignacio Loyola',
    authorPosition = 'Software Engineer',
    quote = "There are many bad things that are bad for the eyes, but none are as bad as not washing your hands after eating something spicy.",
  } = variables;

  return (
    <Layer className="bg-red-600" >
      <Layer className="flex flex-col justify-start items-start px-16 py-12 text-white">
        <h1 className="text-2xl mt-1 font-semibold tracking-wide">{quoteTheme}</h1>
      </Layer>
      <Layer>
        <h1 style={{fontFamily: "Times New Roman"}} className='pt-24 pl-12 text-9xl font-serif font-medium text-white'>
          {`"`}
        </h1>
      </Layer>
      <Layer className="flex flex-col justify-start items-start pl-24 lg:pl-32 pt-28 lg:py-20 text-white pr-32 lg:pr-80 tracking-normal">
        <h2 className="text-2xl lg:text-4xl mt-1 lg:mt-10 font-serif font-medium">{quote}</h2>
      </Layer>
      <Layer className="flex flex-col justify-end items-start pl-32 py-10 text-white pr-80 tracking-normal">
        <div>
          <svg width="5rem" height="5rem">
            <rect x="0rem" y="4.5rem" width="3rem" height="0.35rem" fill="white"></rect>
          </svg>
        </div>
        <h2 className="text-2xl mt-1 font-semibold">{author}</h2>
        <h2 className="text-2xl mt-1 font-light">{authorPosition}</h2>
      </Layer>
      <Layer className="flex flex-col justify-end items-end px-20 py-12 text-white">
        <img src={logo} className={classNames("filter-white" /* custom */, "w-36 h-36")} />
      </Layer>
    </Layer>
  );
}
