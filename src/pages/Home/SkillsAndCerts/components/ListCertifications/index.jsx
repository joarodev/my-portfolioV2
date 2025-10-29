import React from 'react'
import { motion } from "framer-motion";
import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCertificates } from '../../../../../context/CertificatesContext';
import SkeletonCertCard from './Skeleton';

  const CertificationItem = ({ name, institution, url, idc, index }) => (
    <motion.div 
      className="flex items-center justify-between p-4 rounded-xl border border-secondary/20  sm:border-none hover:bg-secondary/10 hover:border-secondary/20 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
        <a key={index}
          href={url}
          target="_blank" >
            <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-secondary" />
                <div>
                <p className="font-bold text-fg">{name}</p>
                <p className="text-sm text-fg/80">{institution}</p>
                </div>
            </div>
        </a>
    </motion.div>
  );

export default function ListCertifications() {
  const { certificates, isLoading } = useCertificates();

  if (isLoading) {
    return Array.from({ length: 6 }).map((_, i) => <SkeletonCertCard key={i} />);
  }

  return certificates.map((cert, i) => 
    (
        <CertificationItem key={cert.id} index={i} {...cert} />
    ))
}
