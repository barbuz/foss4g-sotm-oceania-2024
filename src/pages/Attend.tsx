import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import Content from "../documents/attend.md";
import { markdownCommonStyles } from "../utils/markdownCommonStyles";

const AttendPage = () => {
  const [mddText, setMddText] = useState("");

  // Fetch Terms of Use
  useEffect(() => {
    fetch(Content)
      .then((res) => res.text())
      .then((text) => setMddText(text));
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: "url('/imgs/group.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 0px",
        }}
        className="relative flex items-center justify-center h-64 bg-gray-100 bg-no-repeat bg-cover bg-center"
      ></section>
      <div className="p-6">
        <section className="mx-auto mt-8 prose-base max-w-none">
          <Markdown
            options={{
              overrides: markdownCommonStyles,
            }}
            children={mddText}
          />
        </section>
      </div>
    </>
  );
};
export default AttendPage;
