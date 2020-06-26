export enum ToolType {
  ALL = 'ALL',
  BACKEND = 'BACKEND',
  FRONTEND = 'FRONTEND',
  DATABASE = 'DATABASE',
  LANGUAGE = 'LANGUAGE',
  BLOCKCHAIN = 'BLOCKCHAIN',
  CICD = 'CICD',
  OS = 'OS',
  TOOLS = 'TOOLS',
  PROTOCOLS = 'PROTOCOLS',
}

export enum Experience {
  ALL = 'ALL',
  ADVANCED = 'ADVANCED',
  PROFICIENT = 'PROFICIENT',
  FAMILIAR = 'FAMILIAR',
}

export const tools = [
  {
    src: 'nextjs.png',
    href: 'https://nextjs.org/',
    groups: [ToolType.FRONTEND],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'javascript.png',
    href: 'https://www.javascript.com/',
    groups: [ToolType.LANGUAGE],
    experience: Experience.ADVANCED,
  },
  {
    src: 'python.png',
    href: 'https://www.python.org/',
    groups: [ToolType.LANGUAGE],
    experience: Experience.FAMILIAR,
  },
  {
    src: 'node.png',
    href: 'https://nodejs.org/es/',
    groups: [ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'react.png',
    href: 'https://es.reactjs.org/',
    groups: [ToolType.FRONTEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'vue.png',
    href: 'https://vuejs.org/',
    groups: [ToolType.FRONTEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'bulljs.png',
    href: 'https://optimalbits.github.io/bull/',
    groups: [ToolType.DATABASE],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'jenkins.png',
    href: 'https://www.jenkins.io/',
    groups: [ToolType.CICD],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'netlify.png',
    href: 'https://www.netlify.com/',
    groups: [ToolType.CICD],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'nestjs.png',
    href: 'https://nestjs.com/',
    groups: [ToolType.BACKEND],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'heroku.png',
    href: 'https://www.heroku.com/',
    groups: [ToolType.CICD],
    experience: Experience.FAMILIAR,
  },
  {
    src: 'aws.png',
    href: 'https://aws.amazon.com/',
    groups: [ToolType.BACKEND],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'ubuntu.png',
    href: 'https://ubuntu.com/',
    groups: [ToolType.OS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'centos.png',
    href: 'https://www.centos.org/',
    groups: [ToolType.OS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'typescript.png',
    href: 'https://www.typescriptlang.org/',
    groups: [ToolType.LANGUAGE],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'azure.png',
    href: 'https://azure.microsoft.com/es-es/',
    groups: [ToolType.BACKEND],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'c.png',
    groups: [ToolType.LANGUAGE],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'arduino.png',
    href: 'https://www.arduino.cc/',
    groups: [ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'html.png',
    groups: [ToolType.LANGUAGE],
    experience: Experience.ADVANCED,
  },
  {
    src: 'css.png',
    groups: [ToolType.LANGUAGE],
    experience: Experience.ADVANCED,
  },
  {
    src: 'redux.png',
    href: 'https://redux.js.org/',
    groups: [ToolType.FRONTEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'jest.png',
    href: 'https://jestjs.io/',
    groups: [ToolType.BACKEND, ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'mysql.png',
    href: 'https://www.mysql.com/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'redis.png',
    href: 'https://redis.io/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'mongo.png',
    href: 'https://www.mongodb.com/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'nginx.png',
    href: 'https://www.nginx.com/',
    groups: [ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'apache.png',
    href: 'https://httpd.apache.org/',
    groups: [ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'docker.png',
    href: 'https://www.docker.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'git.png',
    href: 'https://git-scm.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'bitbucket.png',
    href: 'https://bitbucket.org/',
    groups: [ToolType.CICD, ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'github.png',
    href: 'https://github.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'gitlab.png',
    href: 'https://gitlab.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'eslint.png',
    href: 'https://eslint.org/',
    groups: [ToolType.TOOLS],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'mongoose.png',
    href: 'https://mongoosejs.com/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'solidity.png',
    href: 'https://solidity.readthedocs.io/en/v0.6.10/',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.ADVANCED,
  },
  {
    src: 'truffle.png',
    href: 'https://www.trufflesuite.com/truffle',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.ADVANCED,
  },
  {
    src: 'bash.png',
    groups: [ToolType.LANGUAGE],
    experience: Experience.ADVANCED,
  },
  {
    src: 'ganache.svg',
    href: 'https://www.trufflesuite.com/ganache',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.ADVANCED,
  },
  {
    src: 'jira.jpg',
    groups: [ToolType.TOOLS],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'uport.png',
    href: 'https://www.uport.me/',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.FAMILIAR,
  },
  {
    src: 'rust.png',
    href: 'https://www.rust-lang.org/',
    groups: [ToolType.LANGUAGE],
    experience: Experience.FAMILIAR,
  },
  {
    src: 'drizzle.svg',
    href: 'https://www.trufflesuite.com/drizzle',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.FAMILIAR,
  },
  {
    src: 'ethereum.png',
    href: 'https://ethereum.org/',
    groups: [ToolType.BLOCKCHAIN, ToolType.PROTOCOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'metamask.png',
    href: 'https://metamask.io/',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'web3js.png',
    href: 'https://web3js.readthedocs.io/en/v1.2.9/',
    groups: [ToolType.BLOCKCHAIN],
    experience: Experience.ADVANCED,
  },
  {
    src: 'express.png',
    href: 'https://expressjs.com/',
    groups: [ToolType.BACKEND],
    experience: Experience.ADVANCED,
  },
  {
    src: 'angular.png',
    href: 'https://angular.io/',
    groups: [ToolType.FRONTEND],
    experience: Experience.FAMILIAR,
  },
  {
    src: 'styled-components.png',
    href: 'https://styled-components.com/',
    groups: [ToolType.FRONTEND],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'http.png',
    href: 'https://tools.ietf.org/html/rfc2616',
    groups: [ToolType.PROTOCOLS],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'mqtt.png',
    href: 'http://mqtt.org/',
    groups: [ToolType.PROTOCOLS],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'webstorm.png',
    href: 'https://www.jetbrains.com/webstorm/',
    groups: [ToolType.TOOLS],
    experience: Experience.PROFICIENT,
  },
  {
    src: 'vscode.png',
    href: 'https://code.visualstudio.com/',
    groups: [ToolType.TOOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'tls.png',
    href: 'https://tools.ietf.org/html/rfc5246',
    groups: [ToolType.PROTOCOLS],
    experience: Experience.ADVANCED,
  },
  {
    src: 'jwt.png',
    href: 'https://jwt.io/',
    groups: [ToolType.PROTOCOLS],
    experience: Experience.PROFICIENT,
  },
];
