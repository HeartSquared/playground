import prompts from 'prompts';
import {
  calculateTermDeposit,
  CalculateTermDepositArgs,
} from './calculateTermDeposit';
import { PromptObject } from 'prompts';

type QuestionNames = keyof CalculateTermDepositArgs;

const questions = [
  {
    type: 'number',
    name: 'startAmount',
    message: 'Starting with ($)',
    max: 1_500_000,
    // Did not use `min` as the UI is not nice when set to 1000
    validate: (value) => {
      if (!value) return 'Please enter a starting amount';
      return value >= 1000
        ? true
        : 'Please enter an amount above or equal to 1000';
    },
  },
  {
    type: 'number',
    name: 'interestRate',
    message: 'Interest rate (%)',
    float: true,
    initial: 0,
    min: 0,
    max: 15,
  },
  {
    type: 'number',
    name: 'termYears',
    message: 'Investment term (years)',
    initial: 1,
    min: 1, // If we were using months, it would be 3 months
    max: 5,
  },
  {
    type: 'select',
    name: 'interestPaid',
    message: 'Interest paid',
    choices: [
      { title: 'Monthly', value: 'monthly' },
      { title: 'Quarterly', value: 'quarterly' },
      { title: 'Annually', value: 'annually' },
      { title: 'At Maturity', value: 'at_maturity' },
    ],
  },
] satisfies PromptObject<QuestionNames>[];

(async (): Promise<void> => {
  console.info('Term deposit calculator');

  const response = await prompts(questions);
  console.info(
    'Final balance (rounded to the nearest $):',
    calculateTermDeposit(response),
  );
})();
