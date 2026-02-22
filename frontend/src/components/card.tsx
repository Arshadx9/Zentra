interface CardProps {
  title: string;
  link: string;
}

const getType = (link: string) => {
  if (link.includes("youtu.be") || link.includes("youtube.com")) return "youtube"
  if (link.includes("x.com") || link.includes("twitter.com")) return "twitter"
  return "other"
}

const getYoutubeEmbedUrl = (url: string) => {
  if (url.includes("youtu.be")) return `https://www.youtube.com/embed/${url.split("youtu.be/")[1].split("?")[0]}`
  if (url.includes("watch?v=")) return `https://www.youtube.com/embed/${url.split("watch?v=")[1].split("&")[0]}`
  return url
}

export const Card = ({ title, link }: CardProps) => {
  const type = getType(link)

  return (
    <div className="max-w-96 shadow-md rounded-md border border-zinc-600 text-white p-4 m-6">

      <div className="flex justify-between mb-4">
        <span className="font-medium">{title}</span>
        <a href={link} target="_blank" rel="noreferrer" className="text-blue-500 text-sm">
          Open
        </a>
      </div>

      {type === "youtube" && (
        <iframe
          className="w-full aspect-video rounded"
          src={getYoutubeEmbedUrl(link)}
          allowFullScreen
        />
      )}

      {type === "twitter" && (
        <blockquote className="twitter-tweet">
          <a href={link.replace("x.com", "twitter.com")}></a>
        </blockquote>
      )}

      {type === "other" && (
        <a href={link} target="_blank" rel="noreferrer" className="text-blue-400 underline break-all">
          {link}
        </a>
      )}

    </div>
  )
}