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
    author =  'Michael Tubbs',
    authorPosition = 'Mayor of Stockton',
    title = "Hello world Ignacio!",
    quote = "There is nothing inherently dignified in working two or three jobs, yet still being unable to afford the basics",
    description = 'This is a description',
  } = variables;

  return (
    <>
      <Layer className="bg-red-600 rounded-lg" />
      <Layer className="flex flex-col justify-start items-start px-20 py-12 text-white">
        <h1 className="text-2xl mt-4 font-medium">{quoteTheme}</h1>
      </Layer>
      <Layer className="flex flex-col justify-center items-start px-40 py-12 text-white">
        <h2 className="text-5xl mt-10 font-serif">{quote}</h2>
        <h2 className="text-1xl mt-4 font-semibold">{author}</h2>
        <h2 className="text-1xl mt-4">{authorPosition}</h2>
        
      </Layer>
      <Layer className="flex flex-col justify-end items-end px-20 py-12 text-white">
        <img src={logo} className={classNames("filter-white" /* custom */, "w-36 h-36")} />
      </Layer>
    </>
  );
}
