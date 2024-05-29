import { getInput, setOutput } from "@actions/core";

export const run = async (): Promise<void> => {
  const count = parseInt(getInput('count'));
  setOutput('count', count);
  setOutput('matrix', JSON.stringify(new Array(Number(count)).fill(0).map((_, i) => ({
    index: i,
    total: count,
  }))));
};

run();
