import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import LifeAni from "../animations/LifeAni";
import Me from "../animations/Me";
import MotionAni from "../animations/MotionAni";
import ProductAni from "../animations/ProductAni";
import VideoAni from "../animations/VideoAni";
import ShareMeta from "../components/ShareMeta";
import StoriesSection from "../components/StoriesSection";
import { client } from "../data/client";
import GetStoriesByTag from "../data/GetStoriesByTag";
import IStory from "../types/Story";

const Home: NextPage<Props> = ({
  productStories,
  videoStories,
  lifeStories
}) => {
  return (
    <>
      <ShareMeta />

      <div>
        <section className="h-screen top-section">
          <div className="h-full relative flex flex-col items-center">
            <div className="tilted-header flex-grow-0">
              <div>
                <h5>HEY, FRIEND 👋</h5>
                <h2>MY NAME’S DREW</h2>
              </div>
            </div>
            <div className="flex justify-center flex-grow w-full pb-4">
              <Me />
            </div>
            <div className="flex-grow-0 flex flex-col items-center text-gray-500 pb-2">
              <div className="header-font text-sm uppercase">scroll down</div>
              <div>
                <i className="bi bi-mouse-fill"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="h-screen flex flex-col items-center justify-center">
          <div>
            <div className="tilted-header mb-6">
              <h3>I{"'"}M A...</h3>
            </div>
            <div className="pt-4 flex flex-col items-center space-y-12">
              <ProductAni link="#product" />
              <div className="pt-2">
                <h4 className="leading-0.75 inline-block uppercase">AND</h4>
              </div>
              <VideoAni link="#video" />
              <div className="pt-2">
                <h4 className="leading-0.75 inline-block uppercase">in</h4>
              </div>
              <LifeAni link="#life" />
            </div>
          </div>
        </section>
        <StoriesSection
          animation={<ProductAni />}
          label={"I'm a..."}
          id={"product"}
          stories={productStories}
        >
          <p>
            I love designing and developing digital products -{" "}
            <a
              href="https://join.lumastic.com"
              target="_blank"
              className="wave-border bottom"
              rel="noreferrer"
            >
              primarily for creators
            </a>
            . I{"'"}m always learning new skills to help bring my ideas to life.
          </p>
          <p>Here are some of my latest learnings:</p>
        </StoriesSection>
        <StoriesSection
          animation={<VideoAni />}
          label={"I'm an..."}
          id={"video"}
          stories={videoStories}
        >
          <p>
            I love telling stories about the intersection of the social internet
            and entrepreneurship.
          </p>
          <p>
            Here are the latest stories from my blog and{" "}
            <a
              className="wave-border bottom"
              rel="noreferrer"
              href="https://www.youtube.com/c/Curiository"
              target="_blank"
            >
              YouTube channel
            </a>
            :
          </p>
        </StoriesSection>
        <StoriesSection
          animation={<LifeAni />}
          label={"living in..."}
          id={"life"}
          stories={lifeStories}
        >
          <p>
            Home to me is being in the Blue Ridge Mountains with my girlfriend
            and my dog. Outside of work, I love board sports, cooking, and
            playing music with friends.
          </p>
          <p>Here are some of my latest life adventures:</p>
        </StoriesSection>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { stories: productStories }: { stories: [IStory] } =
    await client.request(GetStoriesByTag, {
      tags: ["software", "design"]
    });
  const { stories: videoStories }: { stories: [IStory] } = await client.request(
    GetStoriesByTag,
    {
      tags: ["video", "entrepreneurship"]
    }
  );
  const { stories: lifeStories }: { stories: [IStory] } = await client.request(
    GetStoriesByTag,
    {
      tags: ["life"]
    }
  );

  // Provide Props to the Page Component
  return {
    props: {
      productStories,
      videoStories,
      lifeStories
    },
    revalidate: 60 * 60 // Cache response for 1 hour (60 seconds * 60 minutes)
  };
};

type Props = {
  productStories: [IStory];
  videoStories: [IStory];
  lifeStories: [IStory];
};

export default Home;
