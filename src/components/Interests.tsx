import Image from 'next/image';
import React from 'react';

const Interests: React.FC = () => {
  return (
    <section id="interests" className="pb-60">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <h2 className="text-6xl font-bold mb-4 bg-accent py-1 px-2">Interests</h2>
            <p className="text-xl leading-relaxed">
              An interest of mine is playing basketball at a semi-competitive level. Throughout my college experience I have played on the Northeastern University 
              Club Basketball Team. My club team plays in an organized league called the NCBBA (National Club BasketBall Association) where we coordinate and play 
              games against club programs from other schools. At the end of the season we ranked #3 in the nation and it was a great experience. I had the opportunity to play collegiate basketball 
              but instead chose to go to Northeastern for the Co-op program and education and this ahs been a great way to still play organized basketball against great
              competition! I really enjoy basketball and it is a major stress reliever.
            </p>
          </div>
          <div className="w-full md:w-1/3 pr-0 sm:pr-3">
            <Image
              className="rounded-lg"
              src="/images/BasketballImage.JPG"
              alt="Another of my photo should be here"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
