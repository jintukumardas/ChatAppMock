import {React} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserCard from "./UserCard";

export default function ActiveConversations() {

  return (
    <div>
      <Accordion sx={{ border: "none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Active Conversations
          </Typography>
          <div className="active-conversations-count">4</div>
        </AccordionSummary>
        <AccordionDetails
          className="scrollable-content"
          style={{ maxHeight: "230px", overflowY: "scroll" }}
        >
          <UserCard
            userPhoto="/images/henry.png"
            userName="Henry Boyd"          
          />
          <UserCard
            userPhoto="/images/martha.png"
            userName="Martha Curtis"
            visibility={true}
            unread={2}
          />
          <UserCard
            userPhoto="/images/phillip.png"
            userName="Phillip Tucker"
          />
          <UserCard
            userPhoto="/images/christine.png"
            userName="Christine Reid"
          />
          <UserCard
            userPhoto="/images/jerry.png"
            userName="Jerry Guzman"
          />
          <UserCard
            userPhoto="/images/russel.png"
            userName="Russell Williams"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ border: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
            Archieve Conversations
          </Typography>
          <div className="active-conversations-count">7</div>
        </AccordionSummary>
        <AccordionDetails
          className="scrollable-content"
          style={{ overflowY: "scroll" }}
        >
          <Typography>No Archieved Conversations!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
