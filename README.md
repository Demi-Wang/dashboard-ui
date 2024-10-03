# Tech Stack

- Next.js
- TypeScript
- Shadcn: UI
- Tailwind CSS
- Zod

# Troubleshooting

1. Attempted import error: 'useForm' is not exported from 'react-hook-form' (imported as 'useForm').
   add 'use client' to the top of the file where useForm is being imported
2. Removing lockdown-install.js:1 Removing unpermitted intrinsics.
   The warning is coming from MetaMask Chrome Extension, turned it off and the errors went away.
3. warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it.
   git config --global core.autocrlf false
