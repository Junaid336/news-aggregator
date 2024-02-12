import Heading from "./Heading"
import NewsCard from "./NewsCard"

const NewsList = ({articles=[], text="Latest"}) => {
  return (
    <div>
        <section className="mx-auto max-w-screen-lg px-4 py-12">
            <Heading text={text} />
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index)=>(
                <NewsCard key={index} {...article} />
            ))}
            </div>
        </section>
    </div>
  )
}


export default NewsList