import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ExpandableAccordion = ({
  title,
  expanded,
  onChange,
  items,
  renderItem,
}) => {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary expandIcon={<Button>{expanded ? "-" : "+"}</Button>}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexWrap="wrap" gap={2}>
          {expanded && items.map((item, index) => renderItem(item, index))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpandableAccordion;
