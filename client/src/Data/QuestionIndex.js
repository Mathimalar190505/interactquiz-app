import { PERCENTAGES_QUESTIONS } from "./Aptitude/Percentage";
import { PROFIT_AND_LOSS_QUESTIONS } from "./Aptitude/ProfitAndLoss";
import { TIME_AND_WORK_QUESTIONS } from "./Aptitude/TimeAndWork";
import { NUMBER_SERIES_QUESTIONS } from "./Aptitude/NumberSeries";



// Structure: { Subject: { Topic: QuestionsArray } }
export const QUESTIONS = {
  Aptitude: {
    "Percentages": PERCENTAGES_QUESTIONS,
    "Profit and Loss": PROFIT_AND_LOSS_QUESTIONS,
    "Time and Work": TIME_AND_WORK_QUESTIONS,
    "Number Series": NUMBER_SERIES_QUESTIONS,
   
  },
};