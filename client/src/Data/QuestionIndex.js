import { PERCENTAGES_QUESTIONS } from "./Aptitude/Percentage";
import { PROFIT_AND_LOSS_QUESTIONS } from "./Aptitude/ProfitAndLoss";
import { TIME_AND_WORK_QUESTIONS } from "./Aptitude/TimeAndWork";
import { NUMBER_SERIES_QUESTIONS } from "./Aptitude/NumberSeries";
import { JAVA_BASICS_QUESTIONS } from "./Java/Basics";
import { JAVA_OOP_QUESTIONS } from "./Java/OOP";
import { JAVA_COLLECTIONS_QUESTIONS } from "./Java/Collections";
import { JAVA_MULTITHREADING_QUESTIONS } from "./Java/Multithreading";
import { SQL_BASICS_QUESTIONS } from "./SQL/Basics";
import { SQL_JOINS_QUESTIONS } from "./SQL/Joins";
import { SQL_AGGREGATE_QUESTIONS } from "./SQL/AggregateFunctions";
import { SQL_ADVANCED_QUESTIONS } from "./SQL/Advanced";
import { DS_ARRAYS_AND_LISTS_QUESTIONS } from "./DataStructures/ArraysAndLists";
import { DS_STACKS_AND_QUEUES_QUESTIONS } from "./DataStructures/StacksAndQueues";
import { DS_TREES_QUESTIONS } from "./DataStructures/Trees";
import { DS_GRAPHS_AND_HASHING_QUESTIONS } from "./DataStructures/GraphsAndHashing";
import { OS_BASICS_QUESTIONS } from "./OperatingSystems/BasicsAndStructure";
import { OS_PROCESS_MANAGEMENT_QUESTIONS } from "./OperatingSystems/ProcessManagement";
import { OS_MEMORY_MANAGEMENT_QUESTIONS } from "./OperatingSystems/MemoryManagement";
import { OS_FILE_DEVICE_QUESTIONS } from "./OperatingSystems/FileAndDeviceManagement";

// Structure: { Subject: { Topic: QuestionsArray } }
export const QUESTIONS = {
  Aptitude: {
    "Percentages": PERCENTAGES_QUESTIONS,
    "Profit and Loss": PROFIT_AND_LOSS_QUESTIONS,
    "Time and Work": TIME_AND_WORK_QUESTIONS,
    "Number Series": NUMBER_SERIES_QUESTIONS,
   
  },
  Java: {
    "Basics": JAVA_BASICS_QUESTIONS,
    "OOP": JAVA_OOP_QUESTIONS,
    "Collections": JAVA_COLLECTIONS_QUESTIONS,
    "Multithreading": JAVA_MULTITHREADING_QUESTIONS,
  },
  SQL: {
    "Basics": SQL_BASICS_QUESTIONS,
    "Joins": SQL_JOINS_QUESTIONS,
    "Aggregate Functions": SQL_AGGREGATE_QUESTIONS,
    "Advanced Queries & Views": SQL_ADVANCED_QUESTIONS,
  },
  DataStructures: {
    "Arrays and Linked Lists": DS_ARRAYS_AND_LISTS_QUESTIONS,
    "Stacks and Queues": DS_STACKS_AND_QUEUES_QUESTIONS,
   "Trees": DS_TREES_QUESTIONS,
    "Graphs and Hashing": DS_GRAPHS_AND_HASHING_QUESTIONS,
  },
  OperatingSystems: {
    "Basics and Structure": OS_BASICS_QUESTIONS,
    "Process Management": OS_PROCESS_MANAGEMENT_QUESTIONS,
    "Memory Management": OS_MEMORY_MANAGEMENT_QUESTIONS,
    "File and Device Management": OS_FILE_DEVICE_QUESTIONS,
  },

};