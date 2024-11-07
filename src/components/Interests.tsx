import Image from 'next/image';
import React from 'react';

const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-accent py-3 px-6 inline-block">Interests</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
            <p className="text-lg md:text-xl leading-relaxed">
              An interest of mine is playing basketball at a semi-competitive level. Throughout my college experience, I have played on the Northeastern University 
              Club Basketball Team. My club team plays in an organized league called the NCBBA (National Club BasketBall Association) where we coordinate and play 
              games against club programs from other schools. At the end of the season, we ranked #3 in the nation, and it was a great experience. I had the opportunity to play collegiate basketball 
              but instead chose to go to Northeastern for the Co-op program and education. This has been a great way to still play organized basketball against great
              competition! I really enjoy basketball, and it is a major stress reliever.
            </p>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <Image
              className="rounded-lg"
              src="/images/BasketballImage.JPG"
              alt="Basketball action shot"
              width={600}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;