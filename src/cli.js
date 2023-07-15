#!/usr/bin/env node

import { resolve, dirname } from 'path';
import { create } from 'create-initializer';

const module_url = import.meta.url;

const templateRoot = resolve(dirname(module_url), '..', 'templates');

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
