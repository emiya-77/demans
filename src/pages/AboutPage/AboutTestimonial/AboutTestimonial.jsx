'use client'

import React, { useState, useEffect } from 'react';
import Button from "@/components/button/Button";
import Content from "@/components/content/Content";
import './AboutTestimonial.css';
import AboutTestimonialCard from './AboutTestimonialCard';

import aboutTestimonialImgOne from '@/../public/img/about/about-11.jpg'
import aboutTestimonialImgTwo from '@/../public/img/about/about-6.jpg'
import aboutTestimonialImgThree from '@/../public/img/about/about-9.jpg'

const testimonialInfo = {
    subTitle: "Testimonial", 
    title: "Volunteers Story", 
    titleColor: "#000000", 
    description: "Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum. Suspendisse bibendum libero non mauris consequat, vel sagittis lectus suscipit.", 
    descriptionColor: "#7E7E7E", 
    alignment: "start",
};

const testimonials = [
    {
        id: 1,
        text: "Ut varius nec nunc id dictum. Etiam malesuada, quam eu fermentum hendrerit, augue eros tempus diam, tincidunt auctor urna erat ac mauris.",
        name: "Zean Rui",
        designation: "Designation",
        img: aboutTestimonialImgOne,
    },
    {
        id: 2,
        text: "Nullam at ipsum at magna malesuada scelerisque. Proin tincidunt nunc lorem, eget malesuada velit fringilla a.",
        name: "John Doe",
        designation: "Volunteer",
        img: aboutTestimonialImgTwo,
    },
    {
        id: 3,
        text: "Fusce ut eros a arcu accumsan condimentum. Suspendisse potenti. Ut luctus nulla at sapien dignissim, in ornare libero gravida.",
        name: "Jane Smith",
        designation: "Coordinator",
        img: aboutTestimonialImgThree,
    }
];

const AboutTestimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center h-[305px] gap-12 2xl:gap-[30px]">
            <div className="w-full md:w-1/2 2xl:w-[630px] h-full flex gap-2 overflow-hidden shadow-lg">
                {
                    testimonials.map((testimonial) => (
                        <AboutTestimonialCard key={testimonial.id} info={testimonial} currentTestimonial={currentTestimonial}/>
                    ))
                }
            </div>
            <div className="w-full md:w-1/2 2xl:w-[630px] h-full flex flex-col justify-between items-start">
                <Content info={testimonialInfo} />
                <Button value="More Testimonials" />
            </div>
        </div>
    );
};

export default AboutTestimonial;
