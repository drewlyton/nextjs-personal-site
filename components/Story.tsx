import classNames from "classnames";
import Link from "next/link";
import React from "react";
import routes from "../helpers/routes";
import IStory from "../types/Story";

const Story: React.FC<Props> = ({ story }) => {
  return (
    <div className="post-item relative px-2 py-4 flex-grow">
      <Link href={routes.story(story.slug)} passHref>
        <a>
          <div
            className={classNames("mb-4 rounded-2xl overflow-hidden relative", {
              featured: story.highlighted
            })}
          >
            <img
              className="w-full"
              src={story.featuredImage.url}
              alt={`${story.title} featured image`}
            />
          </div>
          <h4 className="leading-none header-font uppercase">{story.title}</h4>
          <div className="text-gray-500 mb-2 text-xs dark:text-gray-300">
            <em>
              {new Date(story.publishedAt).toLocaleString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </em>
          </div>
          <p className="text-black dark:text-white">{story.description}</p>
        </a>
      </Link>
    </div>
  );
};

type Props = {
  story: IStory;
};

export default Story;