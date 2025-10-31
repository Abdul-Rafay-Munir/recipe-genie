import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
    return (
        <section className="text-[#333] font-normal text-lg leading-[28px]">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}