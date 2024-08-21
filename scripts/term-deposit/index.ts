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
    message: 'Deposit amount $',
    validate: (value) => (value ? true : 'Please enter a value'),
  },
  {
    type: 'number',
    name: 'interestRate',
    message: 'Interest rate %',
    float: true,
  },
  {
    type: 'number',
    name: 'termYears',
    message: 'Investment term (years)',
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
  const response = await prompts(questions);

  console.info('Final balance: ', calculateTermDeposit(response));
})();
