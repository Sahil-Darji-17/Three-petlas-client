"use client";

import React from 'react';
import Image from 'next/image';

const defaultMembers = [
  { name: 'Dr. Priya Sharma', role: 'Lead Physiotherapist', img: '/team/member1.jpg', id: 1 },
  { name: 'Amit Verma', role: 'Fitness Coach', img: '/team/member2.jpg', id: 2 },
  { name: 'Dr. Neha Singh', role: 'Rehab Specialist', img: '/team/member3.jpg', id: 3 },
  { name: 'Rohit Mehra', role: 'Wellness Expert', img: '/team/member4.jpg', id: 4 },
];

function TeamCard({ member }: { member: typeof defaultMembers[0] }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-orange-200">
      <div className="w-28 h-28 rounded-full bg-orange-100 flex items-center justify-center mb-4 overflow-hidden">
        {member.img ? (
          <Image src={member.img} alt={member.name} width={112} height={112} className="w-full h-full object-cover" onError={e => (e.currentTarget.style.display = 'none')} />
        ) : (
          <span className="text-5xl text-orange-400">👤</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-orange-700 mb-1 text-center">{member.name}</h3>
      <p className="text-sm text-orange-500 mb-4 text-center">{member.role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Meet Our Team</h2>
          <p className="text-lg text-orange-500 max-w-2xl mx-auto">
            Our expert team is dedicated to your health, fitness, and recovery. Get to know the professionals who will guide you on your wellness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {defaultMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
} 