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

export const tools = [
  {
    src: 'nextjs.png',
    href: 'https://nextjs.org/',
    groups: [ToolType.FRONTEND],
  },
  {
    src: 'javascript.png',
    href: 'https://www.javascript.com/',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'python.png',
    href: 'https://www.python.org/',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'node.png',
    href: 'https://nodejs.org/es/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'react.png',
    href: 'https://es.reactjs.org/',
    groups: [ToolType.FRONTEND],
  },
  {
    src: 'vue.png',
    href: 'https://vuejs.org/',
    groups: [ToolType.FRONTEND],
  },
  {
    src: 'bulljs.png',
    href: 'https://optimalbits.github.io/bull/',
    groups: [ToolType.DATABASE],
  },
  {
    src: 'jenkins.png',
    href: 'https://www.jenkins.io/',
    groups: [ToolType.CICD],
  },
  {
    src: 'netlify.png',
    href: 'https://www.netlify.com/',
    groups: [ToolType.CICD],
  },
  {
    src: 'nestjs.png',
    href: 'https://nestjs.com/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'heroku.png',
    href: 'https://www.heroku.com/',
    groups: [ToolType.CICD],
  },
  {
    src: 'aws.png',
    href: 'https://aws.amazon.com/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'ubuntu.png',
    href: 'https://ubuntu.com/',
    groups: [ToolType.OS],
  },
  {
    src: 'centos.png',
    href: 'https://www.centos.org/',
    groups: [ToolType.OS],
  },
  {
    src: 'typescript.png',
    href: 'https://www.typescriptlang.org/',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'azure.png',
    href: 'https://azure.microsoft.com/es-es/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'c.png',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'arduino.png',
    href: 'https://www.arduino.cc/',
    groups: [ToolType.TOOLS],
  },
  {
    src: 'html.png',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'css.png',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'redux.png',
    href: 'https://redux.js.org/',
    groups: [ToolType.FRONTEND],
  },
  {
    src: 'jest.png',
    href: 'https://jestjs.io/',
    groups: [ToolType.BACKEND, ToolType.TOOLS],
  },
  {
    src: 'mysql.png',
    href: 'https://www.mysql.com/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
  },
  {
    src: 'redis.png',
    href: 'https://redis.io/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
  },
  {
    src: 'mongo.png',
    href: 'https://www.mongodb.com/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
  },
  {
    src: 'nginx.png',
    href: 'https://www.nginx.com/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'apache.png',
    href: 'https://httpd.apache.org/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'docker.png',
    href: 'https://www.docker.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
  },
  {
    src: 'git.png',
    href: 'https://git-scm.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
  },
  {
    src: 'bitbucket.png',
    href: 'https://bitbucket.org/',
    groups: [ToolType.CICD, ToolType.TOOLS],
  },
  {
    src: 'github.png',
    href: 'https://github.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
  },
  {
    src: 'gitlab.png',
    href: 'https://gitlab.com/',
    groups: [ToolType.CICD, ToolType.TOOLS],
  },
  {
    src: 'eslint.png',
    href: 'https://eslint.org/',
    groups: [ToolType.TOOLS],
  },
  {
    src: 'mongoose.png',
    href: 'https://mongoosejs.com/',
    groups: [ToolType.DATABASE, ToolType.BACKEND],
  },
  {
    src: 'solidity.png',
    href: 'https://solidity.readthedocs.io/en/v0.6.10/',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'truffle.png',
    href: 'https://www.trufflesuite.com/truffle',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'bash.png',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'ganache.svg',
    href: 'https://www.trufflesuite.com/ganache',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'jira.jpg',
    groups: [ToolType.TOOLS],
  },
  {
    src: 'uport.png',
    href: 'https://www.uport.me/',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'rust.png',
    href: 'https://www.rust-lang.org/',
    groups: [ToolType.LANGUAGE],
  },
  {
    src: 'drizzle.svg',
    href: 'https://www.trufflesuite.com/drizzle',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'ethereum.png',
    href: 'https://ethereum.org/',
    groups: [ToolType.BLOCKCHAIN, ToolType.PROTOCOLS],
  },
  {
    src: 'metamask.png',
    href: 'https://metamask.io/',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'web3js.png',
    href: 'https://web3js.readthedocs.io/en/v1.2.9/',
    groups: [ToolType.BLOCKCHAIN],
  },
  {
    src: 'express.png',
    href: 'https://expressjs.com/',
    groups: [ToolType.BACKEND],
  },
  {
    src: 'angular.png',
    href: 'https://angular.io/',
    groups: [ToolType.FRONTEND],
  },
  {
    src: 'styled-components.png',
    href: 'https://styled-components.com/',
    groups: [ToolType.FRONTEND],
  },
  {
    src: 'http.png',
    href: 'https://tools.ietf.org/html/rfc2616',
    groups: [ToolType.PROTOCOLS],
  },
  {
    src: 'mqtt.png',
    href: 'http://mqtt.org/',
    groups: [ToolType.PROTOCOLS],
  },
  {
    src: 'webstorm.png',
    href: 'https://www.jetbrains.com/webstorm/',
    groups: [ToolType.TOOLS],
  },
  {
    src: 'vscode.png',
    href: 'https://code.visualstudio.com/',
    groups: [ToolType.TOOLS],
  },
  {
    src: 'tls.png',
    href: 'https://tools.ietf.org/html/rfc5246',
    groups: [ToolType.PROTOCOLS],
  },
  {
    src: 'jwt.png',
    href: 'httpshttps://jwt.io/',
    groups: [ToolType.PROTOCOLS],
  },
];
