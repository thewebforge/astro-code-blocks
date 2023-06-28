declare module 'virtual:codeblocks/user-config' {
  const Config: import('./utils/user-config').CodeBlocksConfig;
  export default Config;
}
declare module 'virtual:codeblocks/project-context' {
  export default { root: string };
}
