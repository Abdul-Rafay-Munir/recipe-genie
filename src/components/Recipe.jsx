import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Recipe({ recipe }) {
  return (
    <section className="text-[#333] font-normal text-lg leading-[28px] prose prose-slate max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {recipe?.trim() || "_No recipe generated yet._"}
      </ReactMarkdown>
    </section>
  );
}
