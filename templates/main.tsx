import React from "react"
import { TemplateProps } from "@flayyer/flayyer-types";
import classNames from "classnames";

import "../styles/tailwind.css";

import background from "../static/background.jpg";
import logo from "../static/logo.svg";

function Layer({ className, ...props}: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={classNames("absolute inset-0", className)} />;
}

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }: TemplateProps) {
  const {
    title = "Hello world Ignacio!",
    quote = "There is nothing inherently dignified in working two or three jobs, yet still being unable to afford the basics",
    img = background,
    description = 'This is a description',
  } = variables;

  return (
    <>
      
      <Layer className="bg-black" />
      <Layer className="flex flex-col justify-end items-start px-12 py-12 text-white">
        <img src={logo} className={classNames("filter-white" /* custom */, "w-36 h-36")} />
        <h1 className="text-6xl mt-4">{title}</h1>
        <h2 className="text-4xl mt-4">{quote}</h2>
        {description && (
          <h2 className="text-4xl font-mono tracking-wider mt-2">{description}</h2>
        )}
      </Layer>
    </>
  );
}
