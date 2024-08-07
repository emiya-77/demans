import Banner from "@/components/Banner/Banner";
import SingleArchivesPost from "@/pages/ArchivesPage/SingleArchivesPost/SingleArchivesPost";

import singlePostBannerImg from "@/../public/img/archives/single-post/single-post-1.jpg"

const SinglePostPage = () => {
  return (
    <div>
      <Banner value="Single Post" img={singlePostBannerImg}/>
      <div className="mb-20">
        <SingleArchivesPost/>
      </div>
    </div>
  )
}

export default SinglePostPage;