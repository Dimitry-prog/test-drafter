'use client';

import { useEffect } from "react";

const BootstrapJS = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
  return null;
};

export default BootstrapJS;