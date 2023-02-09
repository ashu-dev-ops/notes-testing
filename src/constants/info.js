import { AiOutlineCloudSync, AiFillInfoCircle } from "react-icons/ai";
import {
  BsFillBookmarkPlusFill,
  BsFillPeopleFill,
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
import { BiTime } from "react-icons/bi";

export const info = [
  {
    icon: <AiOutlineCloudSync className="icon-info" />,
    heading: "Use it everywhere",
    para: "Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.",
  },
  {
    icon: <BsFillBookmarkPlusFill className="icon-info" />,
    heading: "Stay organized",
    para: "Add tags to find notes quickly with instant searching..",
  },
  {
    icon: <BsFillPeopleFill className="icon-info" />,
    heading: "Work together",
    para: "Share a to-do list, post some instructions, or publish your notes online",
  },
  {
    icon: <BiTime className="icon-info" />,
    heading: "Go back in time",
    para: "Notes are backed up with every change, so you can see what you noted last week or last month.",
  },
  {
    icon: <BsFillJournalBookmarkFill className="icon-info" />,
    heading: "Markdown support",
    para: "Write, preview, and publish your notes in Markdown format.",
  },
  {
    icon: <AiFillInfoCircle className="icon-info" />,
    heading: "It's free",
    para: "Apps, backups, syncing, sharing  it's all completely free.",
  },
];
