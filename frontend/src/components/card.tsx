import { Plusicon } from "../icons/plusicon";

interface Cardprops {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const getYoutubeEmbedUrl = (url: string) => {
  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
};

export const Card = (props: Cardprops) => {
  return (
    <div className="max-w-96 max-h-80 overflow-y-auto shadow-md rounded-md shadow-gray-300 p-4 m-6">

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Plusicon />
          <span>{props.title}</span>
        </div>

        <div className="flex gap-2">
          <a href={props.link} target="_blank" rel="noreferrer">
            <Plusicon />
          </a>
          <Plusicon />
        </div>
      </div>

      <div className="pt-5">
        {props.type === "youtube" && (
          <iframe
            className="w-full aspect-video rounded"
            src={getYoutubeEmbedUrl(props.link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {props.type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};