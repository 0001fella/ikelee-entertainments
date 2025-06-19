import React from 'react';
import Card from './Card';

export default function CardSection() {
  return (
    <section className="bg-white py-16 px-6 flex flex-col md:flex-row justify-around items-start gap-10">
      <Card
        title="STUDIO"
        img="" // replace with image path later
        desc="Our studio has great interior and is comfortably furnished and well-equipped rooms, perfectly designed for recording the best songs."
      />
      <Card
        title="STAFF"
        img="" // replace with image path later
        desc="We employ the best sound engineers with years of industry experience in music production. Their expertise in audio recording and mixing is unmatched."
      />
      <Card
        title="EQUIPMENT"
        img="" // replace with image path later
        desc="At Recording Studio, we use the latest audio mixing equipment and software that guarantees quality sound all your tracks just want us to work on."
      />
    </section>
  );
}
