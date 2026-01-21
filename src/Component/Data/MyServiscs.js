import imageOne from "../image/Laptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faServer,
  faNetworkWired,
  faShieldHalved,
  faGaugeHigh,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const MyServices = [
  {
    id: 1,
    image: faCloud,
    title: "Azure Cloud Management",
    describtion:
      "Managing Microsoft Azure resources to ensure scalability, availability, and cost-effective cloud environments.",
  },
  {
    id: 2,
    image: faServer,
    title: "Virtual Machines Administration",
    describtion:
      "Deploying, configuring, and maintaining Azure Virtual Machines to support secure and reliable workloads.",
  },
  {
    id: 3,
    image: faNetworkWired,
    title: "Cloud Networking",
    describtion:
      "Configuring Azure Virtual Networks, subnets, NSGs, and VPN connections to enable secure cloud communication.",
  },
  {
    id: 4,
    image: faShieldHalved,
    title: "Security & Identity Management",
    describtion:
      "Managing Azure Active Directory, RBAC, and applying cloud security best practices to protect resources.",
  },
  {
    id: 5,
    image: faGaugeHigh,
    title: "Monitoring & Performance Optimization",
    describtion:
      "Monitoring Azure resources using Azure Monitor and Log Analytics to improve performance and reduce downtime.",
  },
  {
    id: 6,
    image: faArrowsRotate,
    title: "Backup & Disaster Recovery",
    describtion:
      "Implementing backup and disaster recovery strategies to protect data and ensure business continuity.",
  },
];

export default MyServices;
