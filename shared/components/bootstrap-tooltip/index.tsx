'use client';

import { useEffect } from "react";
import { Tooltip } from "bootstrap";

const BootstrapTooltip = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
  }, []);

  return null;
};

export default BootstrapTooltip;