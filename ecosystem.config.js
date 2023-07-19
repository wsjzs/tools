module.exports = {
  apps: [
    {
      name: 'gpt',
      script: 'pnpm',
      args: 'start',
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
      max_memory_restart: '1024M',
      max_restarts: 3,
    },
  ],
}