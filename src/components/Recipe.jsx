import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Recipe({ recipe }) {
  return (
    <section className="text-[#333] font-normal text-lg leading-[28px] prose prose-slate max-w-none">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {recipe?.trim() || "_No recipe generated yet._"}
      </ReactMarkdown>
    </section>
  );
}
