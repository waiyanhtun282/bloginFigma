"use client";
import {  Header, HomeCard } from "@/components";
import { motion, Variants } from "framer-motion";


export default function Home() {
  return (
    <motion.main className=" relative "
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      {/* Header */}
      <Header />

      {/* two */}
      <HomeCard />
       
      
      
    </motion.main>
  );
}
