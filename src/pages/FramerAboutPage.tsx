import profile from "../asssets/profile_pic.png";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import "./styles.css"
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
} from "framer-motion"

export default function FramerAboutPage() {
    const scrollRef = useRef(null)
    const ghostRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)

    useLayoutEffect(() => {
        // @ts-ignore
        scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    }, [scrollRef])

    const onResize = useCallback(entries => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width)
        }
    }, [])

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries => onResize(entries))
        // @ts-ignore
        resizeObserver.observe(ghostRef.current)
        return () => resizeObserver.disconnect()
    }, [onResize])

    const { scrollYProgress } = useViewportScroll()
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewportW]
    )
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)

    return (
        <>
            <div className="scroll-container">
                <motion.section
                    ref={scrollRef}
                    style={{ x: spring }}
                    className="thumbnails-container"
                >
                    <div className="thumbnails">
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                    </div>
                </motion.section>
            </div>
            <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
        </>
    );
}

/*
    <div className="bg-green-4 text-white">
            <p className="text-mobile-heading md:text-heading pl-10">About.</p>
            <hr className="border border-white bg-white ml-10 mr-10 md:mr-20"/>
            <div className="flex justify-center items-center h-screen space-x-40">
                <div className="max-w-2xl">
                    <p className="text-mobile-subheading md:text-subheading">Hi there.</p>
                    <p className="text-mobile-standard md:text-standard">I’m Oliver Klukas, this is a funny self-description of myself, my passions, my occupation as a software engineer and student, as well as my skills and (learning) goals. This is a funny self-description of myself, my passions, my occupation as a software engineer and student, as well as my skills and (learning) goals.</p>
                </div>
                <img src={profile} alt="Profile Picture"/>
            </div>
            <p className="text-mobile-subheading md:text-subheading">Skills.</p>
            <p className="text-mobile-subheading md:text-subheading">Experience.</p>
            <p className="text-mobile-subheading md:text-subheading">Education.</p>
        </div>

 */