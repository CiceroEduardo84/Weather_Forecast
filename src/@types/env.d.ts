/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
