#!/usr/bin/env node

import { resolve } from 'path';
import { create } from 'create-initializer';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
This is a caveat!
You can change this in \`src/cli.js\`.
`;

// See https://github.com/ClassicOldSong/create-initializer/blob/master/README.md for the full option list.

create('create-zio-website', {
  templateRoot,
  defaultTemplate: 'default',
  templatePrefix: '',
  after: ({ answers }) => console.log(`Ok you chose ${answers.architecture}.`),
  caveat,
});
