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
    <Layer className="flex flex-col justify-start items-stretch px-16 py-12 text-white bg-red-600">
      <h1 className="text-2xl mt-1 font-semibold tracking-wide">{quoteTheme}</h1>

      <div className="flex-grow flex flex-row justify-start items-stretch mt-10">
        <div>
          <svg className="mr-4" width="82" height="49" viewBox="0 0 82 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6639 0H38.1428C22.9274 21.1215 22.929 31.899 38.1428 49H0.305414C-1.32435 27.3131 3.20851 16.4951 22.6639 0Z" fill="white"/>
            <path d="M66.5211 0H82C66.7846 21.1215 66.7862 31.899 82 49H44.1626C42.5329 27.3131 47.0657 16.4951 66.5211 0Z" fill="white"/>
          </svg>
        </div>

        <div className="flex flex-col justify-between">
          <blockquote className="text-2xl lg:text-5xl leading-snug lg:leading-snug font-serif font-medium">
            {quote}
          </blockquote>

          <div>
            <div>
              <svg width="5rem" height="5rem">
                <rect x="0rem" y="4.5rem" width="3rem" height="0.35rem" fill="white"></rect>
              </svg>
            </div>
            <p className="text-2xl mt-1 font-semibold">{author}</p>
            <p className="text-2xl mt-1 font-light">{authorPosition}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end flex-shrink-0">
          <img src={logo} className={classNames("filter-white" /* custom */, "w-36 h-36", "object-contain")} />
        </div>
      </div>
    </Layer>
  );
}
