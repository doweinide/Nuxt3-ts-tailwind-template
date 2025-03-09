interface ImportMetaEnv {
  NUXT_PUBLIC_API_BASE: string;
  NUXT_PUBLIC_ENV: 'development' | 'production' | 'staging';
  NUXT_PUBLIC_ENABLE_DEVTOOLS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 