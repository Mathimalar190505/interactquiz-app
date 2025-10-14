import { PERCENTAGES_QUESTIONS } from "./Aptitude/Percentage";
import { PROFIT_AND_LOSS_QUESTIONS } from "./Aptitude/ProfitAndLoss";
import { TIME_AND_WORK_QUESTIONS } from "./Aptitude/TimeAndWork";
import { NUMBER_SERIES_QUESTIONS } from "./Aptitude/NumberSeries";

import { IP_ADDRESSING_QUESTIONS } from "./Networking/IPAddressing";
import { SUBNETTING_QUESTIONS } from "./Networking/Subnetting";
import { OSI_MODEL_QUESTIONS } from "./Networking/OSIModel";
import { TCP_IP_PROTOCOLS_QUESTIONS } from "./Networking/TCPIPProtocols";

import { CLOUD_SERVICE_MODELS_QUESTIONS } from "./CloudComputing/CloudServiceModels";
import { CLOUD_DEPLOYMENT_MODELS_QUESTIONS } from "./CloudComputing/CloudDeploymentModels";
import { CLOUD_SECURITY_AND_PRIVACY_QUESTIONS } from "./CloudComputing/CloudSecurityAndPrivacy";
import { VIRTUALIZATION_AND_RESOURCE_MANAGEMENT_QUESTIONS } from "./CloudComputing/VirtualizationAndResourceManagement";

// Structure: { Subject: { Topic: QuestionsArray } }
export const QUESTIONS = {
  Aptitude: {
    "Percentages": PERCENTAGES_QUESTIONS,
    "Profit and Loss": PROFIT_AND_LOSS_QUESTIONS,
    "Time and Work": TIME_AND_WORK_QUESTIONS,
    "Number Series": NUMBER_SERIES_QUESTIONS,
  },

  Networking: {
    "IP Addressing": IP_ADDRESSING_QUESTIONS,
    "Subnetting": SUBNETTING_QUESTIONS,
    "OSI Model": OSI_MODEL_QUESTIONS,
    "TCP/IP Protocols": TCP_IP_PROTOCOLS_QUESTIONS,
  },

  CloudComputing: {
    "Cloud Service Models": CLOUD_SERVICE_MODELS_QUESTIONS,
    "Cloud Deployment Models": CLOUD_DEPLOYMENT_MODELS_QUESTIONS,
    "Cloud Security and Privacy": CLOUD_SECURITY_AND_PRIVACY_QUESTIONS,
    "Virtualization and Resource Management": VIRTUALIZATION_AND_RESOURCE_MANAGEMENT_QUESTIONS,
  },
};
