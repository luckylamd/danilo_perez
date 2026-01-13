import IconCloud from "./ui/icon-cloud";

const slugs = [
  // All skills found in resume (based on TechBadges and Skills modules)
  "typescript",
  "javascript",
  "python",
  "swift",
  "java",
  "react",
  "nextdotjs",
  "nuxtdotjs",
  "tailwindcss",
  "flutter",
  "kotlin",
  "html5",
  "css3",
  "sass",
  "tailwindcss",
  "redux",
  "jest",
  "cypress",
  "nodedotjs",
  "express",
  "mysql",
  "postgresql",
  "mongodb",
  "redis",
  "go",
  "wordpress",
  "graphql",
  "amazonaws", // aws
  "heroku",
  "firebase",
  "docker",
  "git",
  "github",
  "linux",
  "jira",
  "visualstudiocode",
  "androidstudio",
  // Blockchain
  "solidity",
  "solana",
  "ethereum",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
