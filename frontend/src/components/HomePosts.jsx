import he from 'he';

function HomePosts({post}) {
    const plainText = he.decode(post.desc.replace(/<[^>]+>/g, ''));
  return (
    <div className=" w-full flex mt-8 space-x-4">
        {/* left */}
        <div className=" w-[35%] h-[200px] flex justify-center items-center">
            <img src={post.photo} alt="" className=" h-full w-full object-cover"/>
        </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
            <h1 className=" text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            {post.title}
            </h1>
            <div className=" flex mb-2 text-xs font-semibold text-gray-500 item-center justify-between md:mb-4">
                <p>@{post.username}</p>
                <div className="flex space-x-2">
                    <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
                    <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
                </div>
            </div>
           <p className=" text-sm md:text-lg"> {plainText.slice(0, 200)} ...Read more</p>
        </div>
    </div>
  )
}

export default HomePosts