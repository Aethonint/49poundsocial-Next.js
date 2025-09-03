import React from "react";


export async function generateStaticParams() {
  const res = await fetch("https://49poundsocial.com/wp-json/wp/v2/posts?per_page=10&_embed");
  const posts = await res.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SinglePostPage({ params }) {
  const res = await fetch(
    `https://49poundsocial.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );
  const data = await res.json();

  if (!data || data.length === 0) {
    return <div className="text-center py-10">Post not found</div>;
  }

  const post = data[0];

  return (
    <>
   
<div className="flex flex-col justify-center items-center w-full bg-[#750014] py-20 text-white ">
<div className="flex flex-col justify-start items-start">

 <h1
    className="text-4xl md:text-5xl font-bold max-w-4xl"
    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
  />
 <div className="flex gap-3 text-start justify-center items-center pt-5">
 <p className="text-sm">
    Author: {post._embedded.author[0].name}
  </p>
  <span>|</span>
  <p className="text-sm">
   {new Date(post.date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}
  </p>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 py-8 font-figtree">
  <div
    className="prose prose-lg"
    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
  />
</div>
    </>

  );
}


// export default async function SinglePostPage({ params }) {
//   const res = await fetch(
//     `https://49poundsocial.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
//   );
//   const data = await res.json();

//   if (!data || data.length === 0) {
//     return <div className="text-center py-10">Post not found</div>;
//   }
 
  
//   const post = data[0];

//   // ✅ Move category extraction **after** post is defined
//   const category = post._embedded["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center w-full bg-[#750014] py-20 text-white ">
//         <div className="flex flex-col justify-start items-start">

//           {/* Breadcrumb goes here */}
//           <div className="text-sm text-gray-300 pb-3">
//             <span className="hover:underline">
//               <a href="/">Home</a>
//             </span>{" "}
//             &gt;{" "}
//             <span className="hover:underline capitalize">
//               <a href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>
//                 {category}
//               </a>
//             </span>{" "}
//             &gt;{" "}
//             <span className="text-secondarycolor">
//               {post.title.rendered.length > 60
//                 ? post.title.rendered.slice(0, 60) + "..."
//                 : post.title.rendered}
//             </span>
//           </div>

//           <h1
//             className="text-4xl md:text-5xl font-bold max-w-4xl"
//             dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//           />

//           <div className="flex gap-3 text-start justify-center items-center pt-5">
//             <p className="text-sm">
//               Author: {post._embedded.author[0].name}
//             </p>
//             <span>|</span>
//             <p className="text-sm">
//               {new Date(post.date).toLocaleDateString('en-GB', {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric',
//               })}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-6 py-8 font-figtree">
//         <div
//           className="prose prose-lg"
//           dangerouslySetInnerHTML={{ __html: post.content.rendered }}
//         />
//       </div>
//     </>
//   );
// }
