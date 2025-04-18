import React from 'react'
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards'


export const clientsData = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Muller",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Master",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael John",
    title: "Director of AlphaStream Technologies",
  },
];



const clients = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-16 mt-32">
        <h3 className="heading text-5xl text-center font-bold">
          My goal is your
          <span className="text-bold bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-green-500 via-teal-700 to-green-900 [text-shadow:0_0_rgba(0,0,0,0.1)]"> success</span>
        </h3>
        <p className='text-wrap text-white font-light text-2xl'>
          Don’t just take my word for it here’s what my clients have to say about working with me. Their satisfaction drives my passion for development.
        </p>
        <div className="flex flex-col items-center mt-20 mb-32">
            <InfiniteMovingCards 
              items={clientsData}
              direction="right"
              speed="fast"
            />
        </div>
    </div>
  )
}

export default clients
