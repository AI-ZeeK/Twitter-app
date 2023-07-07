import {
  BsBookmarkStar,
  BsBookmarkStarFill,
  BsCalendar2Range,
  BsEmojiSmile,
} from "react-icons/bs";
import {FaSearch} from "react-icons/fa";

import {IoMailOutline, IoOptionsOutline} from "react-icons/io5";
import {MdEmail, MdOutlineLocationOn} from "react-icons/md";
import {AiTwotoneSchedule} from "react-icons/ai";
import {
  RiFileListFill,
  RiFileListLine,
  RiNotification2Fill,
  RiNotification2Line,
} from "react-icons/ri";
import {
  HiHome,
  HiOutlineGif,
  HiOutlineHome,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi2";
import {BiGroup, BiSolidGroup} from "react-icons/bi";
import {FiSearch} from "react-icons/fi";
import {GrScheduleNew} from "react-icons/gr";
import {CgMoreO} from "react-icons/cg";
import {VscVerified, VscVerifiedFilled} from "react-icons/vsc";
import {GoFileMedia} from "react-icons/go";

export interface NavTypes {
  id: string;
  head: string;
  link?: string;
  icon: string;
  icon2: string;
  state: boolean;
  subnav?: any[];
}

export const homeNav = [
  {
    id: "LMK26P",
    head: "For you",
    state: true,
  },
  {
    id: "XST98H",
    head: "Following",
    state: false,
  },
];

export const navData: NavTypes[] = [
  {
    id: "LMK26P",
    head: "Home",
    link: "/",
    icon: "HiHome",
    icon2: "HiOutlineHome",
    state: true,
  },
  {
    id: "XST98H",
    head: "Explore",
    link: "about",
    icon: "FaSearch",
    icon2: "FiSearch",
    state: false,
  },
  {
    id: "QWE72M",
    head: "Notification",
    link: "investments",
    icon: "RiNotification2Fill",
    icon2: "RiNotification2Line",
    state: false,
  },

  {
    id: "KLL19K",
    head: "Messages",
    icon: "IoMdMail",
    icon2: "IoMailOutline",
    state: false,
  },
  {
    id: "KLP58J",
    head: "Lists",
    link: "statistics",
    icon: "RiFileListFill",
    icon2: "RiFileListLine",
    state: false,
  },
  {
    id: "KLP59J",
    head: "Bookmarks",
    link: "faq",
    icon: "BsBookmarkStarFill",
    icon2: "BsBookmarkStar",
    state: false,
  },
  {
    id: "KQR71K",
    head: "Communities",
    link: "admin/auth",
    icon: "BiSolidGroup",
    icon2: "BiGroup",
    state: false,
  },
  {
    id: "PAR71K",
    head: "Verified",
    link: "admin/auth",
    icon: "VscVerifiedFilled",
    icon2: "VscVerified",
    state: false,
  },
  {
    id: "MAR71A",
    head: "Profile",
    link: "admin/auth",
    icon: "HiUser",
    icon2: "HiOutlineUser",
    state: false,
  },
  {
    id: "MAR71A",
    head: "More",
    link: "admin/auth",
    icon: "CgMoreO",
    icon2: "CgMoreO",
    state: false,
  },
];

export const createPostOptions = [
  {
    id: "XST98H",
    icon: "GoFileMedia",
    tooltip: "Media",
    state: false,
  },
  {
    id: "LMK26P",
    icon: "HiOutlineGif",
    tooltip: "GIF",
    state: false,
  },
  {
    id: "XST98H",
    tooltip: "Poll",
    icon: "IoOptionsOutline",
    state: false,
  },
  {
    id: "XST91L",
    tooltip: "Emoji",
    icon: "BsEmojiSmile",
    state: false,
  },
  {
    id: "XSX08H",
    icon: "BsCalendar2Range",
    tooltip: "Schedule",
    state: false,
  },
  {
    id: "XQR91L",
    tooltip: "Tag Location",
    icon: "MdOutlineLocationOn",
    state: false,
  },
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "HiOutlineHome":
      return <HiOutlineHome fontSize={22} />;
    case "HiHome":
      return <HiHome fontSize={22} />;
    case "FiSearch":
      return <FiSearch fontSize={22} />;
    case "FaSearch":
      return <FaSearch fontSize={22} />;
    case "RiNotification2Fill":
      return <RiNotification2Fill fontSize={22} />;
    case "RiNotification2Line":
      return <RiNotification2Line fontSize={22} />;
    case "IoMailOutline":
      return <IoMailOutline fontSize={22} />;
    case "IoMdMail":
      return <MdEmail fontSize={22} />;
    case "RiFileListLine":
      return <RiFileListLine fontSize={22} />;
    case "RiFileListFill":
      return <RiFileListFill fontSize={22} />;
    case "BsBookmarkStar":
      return <BsBookmarkStar fontSize={22} />;
    case "BsBookmarkStarFill":
      return <BsBookmarkStarFill fontSize={22} />;
    case "BiGroup":
      return <BiGroup fontSize={22} />;
    case "BiSolidGroup":
      return <BiSolidGroup fontSize={22} />;
    case "VscVerifiedFilled":
      return <VscVerifiedFilled fontSize={22} />;
    case "VscVerified":
      return <VscVerified fontSize={22} />;
    case "HiOutlineUser":
      return <HiOutlineUser fontSize={22} />;
    case "HiUser":
      return <HiUser fontSize={22} />;
    case "CgMoreO":
      return <CgMoreO fontSize={22} />;
    case "GoFileMedia":
      return <GoFileMedia />;
    case "HiOutlineGif":
      return <HiOutlineGif />;
    case "IoOptionsOutline":
      return <IoOptionsOutline />;
    case "BsEmojiSmile":
      return <BsEmojiSmile />;
    case "BsCalendar2Range":
      return <BsCalendar2Range />;
    case "MdOutlineLocationOn":
      return <MdOutlineLocationOn />;

    default:
      return null;
  }
};
