import React, { createContext, useContext, useEffect, useState } from "react";
import { certificatesFirebase } from "../data/firebase.js";

const CertificatesContext = createContext();

export const CertificatesProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await certificatesFirebase();
        setCertificates(data);
      } catch (error) {
        console.error("Error loading certificates:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <CertificatesContext.Provider value={{ certificates, isLoading, setCertificates }}>
      {children}
    </CertificatesContext.Provider>
  );
};

export const useCertificates = () => useContext(CertificatesContext);
